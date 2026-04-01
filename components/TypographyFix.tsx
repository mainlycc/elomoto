import React, { useEffect, useMemo, useRef } from 'react';

const WIDOW_WORDS = ['a', 'i', 'w', 'z', 'o', 'u', 'aż', 'od', 'do', 'na', 'za', 'po', 'we', 'ze'] as const;

// Replace Polish "widows" (single short words) with NBSP binding.
// Only meant for user-facing text content (React children), not for attributes.
// NOTE: Do not use `\b` here — JS word boundary isn't unicode-aware and can miss matches in Polish text.
const widowRegex = new RegExp(`(^|\\s)(${WIDOW_WORDS.join('|')})\\s+(?=[\\p{L}\\d])`, 'giu');
// Bind spaced dashes so the dash can't be left at line end, e.g. "życia - osiedlach" -> "życia - osiedlach".
const spacedDashRegex = /\s+([-\u2013\u2014])\s+(?=[\p{L}\d])/gu;

function fixWidowsInString(value: string): string {
  // Use U+2011 (non-breaking hyphen) to prevent splitting around the dash even with aggressive wrapping.
  return value.replace(widowRegex, '$1$2\u00A0').replace(spacedDashRegex, '\u00A0\u2011\u00A0');
}

function shouldSkipTextNode(node: Text): boolean {
  const parent = node.parentElement;
  if (!parent) return true;

  if (parent.isContentEditable) return true;

  // Skip whitespace-sensitive / code-like containers and anything nested inside them.
  const skipSelector = 'pre, code, textarea, script, style';
  if (parent.closest(skipSelector)) return true;

  return false;
}

function shouldSkipElement(element: React.ReactElement): boolean {
  const type = element.type;
  if (typeof type === 'string') {
    const tag = type.toLowerCase();
    // Avoid changing whitespace-sensitive / code-like content.
    if (tag === 'pre' || tag === 'code' || tag === 'textarea' || tag === 'script' || tag === 'style') {
      return true;
    }
  }

  // If element uses dangerouslySetInnerHTML, don't touch it.
  // (React stores it on props).
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if ((element.props as any)?.dangerouslySetInnerHTML) {
    return true;
  }

  return false;
}

function fixNode(node: React.ReactNode): React.ReactNode {
  if (node == null || typeof node === 'boolean' || typeof node === 'number') {
    return node;
  }

  if (typeof node === 'string') {
    return fixWidowsInString(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => fixNode(child));
  }

  if (React.isValidElement(node)) {
    if (shouldSkipElement(node)) {
      return node;
    }

    const children = node.props?.children;
    if (children === undefined) {
      return node;
    }

    const fixedChildren = fixNode(children);
    // Only clone if changed (cheap heuristic: referential equality)
    if (fixedChildren === children) {
      return node;
    }

    return React.cloneElement(node, undefined, fixedChildren);
  }

  // e.g. ReactFragment symbol-like, iterables, etc.
  return node;
}

export function TypographyFix({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLElement | null>(null);

  const fixedChildren = useMemo(() => fixNode(children), [children]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    let current: Node | null = walker.nextNode();
    while (current) {
      if (current.nodeType === Node.TEXT_NODE) textNodes.push(current as Text);
      current = walker.nextNode();
    }

    for (const node of textNodes) {
      if (shouldSkipTextNode(node)) continue;
      const original = node.nodeValue;
      if (!original) continue;
      const next = fixWidowsInString(original);
      if (next !== original) node.nodeValue = next;
    }
  }, [fixedChildren]);

  // `display: contents` ensures no layout wrapper is introduced.
  return (
    <span ref={rootRef as unknown as React.RefObject<HTMLSpanElement>} style={{ display: 'contents' }}>
      {fixedChildren}
    </span>
  );
}

