import React from 'react';

const WIDOW_WORDS = ['i', 'w', 'z', 'o', 'u', 'od', 'do', 'na'] as const;

// Replace Polish "widows" (single short words) with NBSP binding.
// Only meant for user-facing text content (React children), not for attributes.
const widowRegex = new RegExp(`\\b(${WIDOW_WORDS.join('|')})\\s+(?=[\\p{L}\\d])`, 'giu');

function fixWidowsInString(value: string): string {
  return value.replace(widowRegex, '$1\u00A0');
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
  return <>{fixNode(children)}</>;
}

