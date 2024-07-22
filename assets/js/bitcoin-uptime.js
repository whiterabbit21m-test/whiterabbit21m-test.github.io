document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2009-01-03T18:15:05Z');
    const today = new Date();
    const totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    // Aggiorna il conteggio dei giorni
    document.getElementById('days-count').textContent = totalDays;

    // Crea i dati per il grafico
    const data = Array.from({length: totalDays}, (_, i) => ({
        x: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000),
        y: 100  // 100% uptime
    }));

    // Crea il grafico
    const ctx = document.getElementById('uptime-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Uptime di Bitcoin',
                data: data,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'year'
                    }
                },
                y: {
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Uptime: 100%';
                        }
                    }
                }
            }
        }
    });
});
