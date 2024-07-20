// Attendere che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    // Funzione per gestire un modal personalizzato
    function handleCustomModal() {
        const modalTriggers = document.querySelectorAll('.modal-trigger');
        const modalClose = document.querySelectorAll('.modal-close');
        const modals = document.querySelectorAll('.modal');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'block';
                }
            });
        });

        modalClose.forEach(close => {
            close.addEventListener('click', function() {
                const modal = this.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });

        window.addEventListener('click', function(e) {
            modals.forEach(modal => {
                if (e.target == modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Funzione per gestire un form di ricerca personalizzato
    function handleCustomSearch() {
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (searchForm && searchInput && searchResults) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const query = searchInput.value.toLowerCase();
                // Qui dovresti implementare la logica di ricerca reale
                // Questo è solo un esempio di come potrebbe funzionare
                const results = performSearch(query);
                displayResults(results);
            });
        }

        function performSearch(query) {
            // Questa è una funzione di esempio. Nella realtà, dovresti
            // implementare una vera ricerca nel tuo contenuto.
            const fakeResults = [
                {title: "Risultato 1", url: "#"},
                {title: "Risultato 2", url: "#"},
                {title: "Risultato 3", url: "#"}
            ];
            return fakeResults.filter(result => result.title.toLowerCase().includes(query));
        }

        function displayResults(results) {
            searchResults.innerHTML = '';
            if (results.length === 0) {
                searchResults.innerHTML = '<p>Nessun risultato trovato.</p>';
            } else {
                const ul = document.createElement('ul');
                results.forEach(result => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = result.url;
                    a.textContent = result.title;
                    li.appendChild(a);
                    ul.appendChild(li);
                });
                searchResults.appendChild(ul);
            }
        }
    }

    // Funzione per gestire un countdown personalizzato
    function handleCustomCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            const targetDate = new Date(countdownElement.getAttribute('data-target')).getTime();

            const countdownTimer = setInterval(function() {
                const now = new Date().getTime();
                const distance = targetDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `${days}g ${hours}h ${minutes}m ${seconds}s`;

                if (distance < 0) {
                    clearInterval(countdownTimer);
                    countdownElement.innerHTML = "Il countdown è terminato!";
                }
            }, 1000);
        }
    }

    // Inizializza le funzioni
    handleCustomModal();
    handleCustomSearch();
    handleCustomCountdown();
});
