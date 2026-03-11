experiments in markdown

<a href="https://google.com">Google </a><span class="info">new</span>

new
{: .info } 

<input id="searchBar" onkeyup="searchContent()" placeholder="Cerca parole chiave..." type="text">

| This      | table | looks | quite | ugly    |
|-----------|-------|-------|-------|---------|
| Sometimes | you   | don't | want  | headers |
| Sometimes | you   | don't | want  | headers |

{: .info }


```HTML
    <script>
        function searchContent() {
            // Prende il valore della ricerca e lo converte in minuscolo
            let input = document.getElementById('searchBar').value.toLowerCase();
            let items = document.getElementsByClassName('middle');

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
```
