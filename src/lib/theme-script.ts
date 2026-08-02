// Voorkomt flits van verkeerd thema (FOUC) door vóór React-hydratie
// het thema uit localStorage of systeemvoorkeur toe te passen.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('splashmat-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;
