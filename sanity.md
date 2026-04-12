W PowerShell (katalog `studio`):

```powershell
$env:SANITY_API_WRITE_TOKEN="TWÓJ_TOKEN_Z_sanity.io/manage"
npm run seed-english
```

Token: **API → Tokens** w projekcie (uprawnienia zapisu). Nie commituj tokenu do repozytorium.

Polskie realizacje (nadpisanie pełnej treści): `npm run replace-realizations`

**Ważne:** Jeśli kiedyś zapisałeś token w tym pliku w repozytorium, unieważnij go w Sanity i wygeneruj nowy.

**Błąd `ERR_INVALID_CHAR` / `authorization`:** w wartości tokenu znalazł się **Enter** (często gdy PowerShell pokazuje `>>` i łamanie jest w środku stringa). Wklej token w **jednej linii**. Skrypt `seed-english` po aktualizacji usuwa też `\r`/`\n` z końców i środka zmiennej.
