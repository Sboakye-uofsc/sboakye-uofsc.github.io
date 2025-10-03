const SUPABASE_URL = 'https://nycpkxetwietodzbupca.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55Y3BreGV0d2lldG9kemJ1cGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNDEyODIsImV4cCI6MjA3NDYxNzI4Mn0.zg-5rMjBfBl3fn9L5VoLtNnutEXoQw8RF6-mgi4_2yM';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

console.log('Ready to add gameplay chart!');

async function loadGameplayChart() {
    try {
        // Fetch data from your 'tready' table
        const { data, error } = await supabaseClient
            .from('tready')
            .select('*')
            .order('time', { ascending: true });

        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        console.log('Data from Supabase:', data);

        // Prepare data for Chart.js
        const labels = data.map(row => {
            // Format the timestamp for display
            const date = new Date(row.time);
            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        });

        const hours = data.map(row => row.hour);

        // Create the chart
        const ctx = document.getElementById('gameplayHoursChart').getContext('2d');
        const gameplayChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Gameplay Hours',
                    data: hours,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    }
                }
            }
        });

        console.log('Chart created successfully!');

    } catch (err) {
        console.error('Error:', err);
    }
}

// Load the chart when page loads
loadGameplayChart();