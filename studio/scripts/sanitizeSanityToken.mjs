/**
 * Usuwa znaki niedozwolone w nagłówku HTTP Authorization (np. \r \n po kopiowaniu z pliku / PowerShell).
 */
export function sanitizeSanityToken(raw) {
  if (raw == null) return '';
  let t = String(raw).trim();
  t = t.replace(/\r?\n/g, '').replace(/\uFEFF/g, '');
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    t = t.slice(1, -1).trim();
  }
  return t;
}
