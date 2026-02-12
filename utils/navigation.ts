export function navigateTo(path: string) {
  // Keep default browser behavior for external links
  if (/^https?:\/\//i.test(path)) {
    window.location.href = path;
    return;
  }

  // Normalize empty path
  const nextPath = path?.trim() ? path : '/';

  // Update URL without full reload
  window.history.pushState({}, '', nextPath);

  // Notify listeners (App.tsx listens to popstate)
  window.dispatchEvent(new PopStateEvent('popstate'));
}

