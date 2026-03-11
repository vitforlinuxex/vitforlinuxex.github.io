function filtraTabella(testoRicerca) {
  const tuttiITbody = document.querySelectorAll('tbody');

  tuttiITbody.forEach(tbody => {
    const righe = tbody.querySelectorAll('tr');

    righe.forEach(tr => {
      // Se il tr contiene almeno un th, non lo nascondiamo mai
      if (tr.querySelector('th')) {
        tr.style.display = ''; // mostra sempre
        return;
      }

      const testoRiga = tr.textContent.toLowerCase();
      const testoRic = testoRicerca.toLowerCase();

      if (testoRiga.includes(testoRic)) {
        tr.style.display = '';
      } else {
        tr.style.display = 'none';
      }
    });
  });
}
