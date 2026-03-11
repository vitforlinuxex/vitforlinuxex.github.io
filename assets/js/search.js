    <script>
        function searchContent() {
            // Prende il valore della ricerca e lo converte in minuscolo
            let input = document.getElementById('searchBar').value.toLowerCase();
            let items = document.getElementsByClassName('searchable');

            for (let i = 0; i < items.length; i++) {
                // Controlla se il testo dell'elemento contiene la stringa cercata
                if (items[i].innerText.toLowerCase().includes(input)) {
                    items[i].classList.remove('hidden'); // Mostra
                } else {
                    items[i].classList.add('hidden'); // Nasconde
                }
            }
        }
    </script>
