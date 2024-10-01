const ctx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Hours Present', 'Hours Absent'],
        datasets: [{
            label: 'Attendance',
            data: [50, 40], // Example data
            backgroundColor: [
                '#00bfa5',
                '#ffb300'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false // Disable the default legend
            }
        }
    }
});
