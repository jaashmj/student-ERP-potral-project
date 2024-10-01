document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mark1 = document.getElementById('mark1').value;
    const mark2 = document.getElementById('mark2').value;
    const mark3 = document.getElementById('mark3').value;
    const mark4 = document.getElementById('mark4').value;

    fetch('http://localhost:3000/api/marks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mark1, mark2, mark3, mark4 })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = 'Marks saved successfully!';
        loadMarks();
    })
    .catch(error => {
        document.getElementById('result').textContent = 'Error saving marks.';
        console.error('Error:', error);
    });
});

function loadMarks() {
    fetch('http://localhost:3000/api/marks')
        .then(response => response.json())
        .then(data => {
            const marksList = document.getElementById('marksList');
            marksList.innerHTML = '<h2>Stored Marks</h2>';
            data.forEach(mark => {
                marksList.innerHTML += `<p>ID: ${mark.id}, Internal 1: ${mark.mark1}, Internal 2: ${mark.mark2}, Internal 3: ${mark.mark3}, Internal 4: ${mark.mark4}</p>`;
            });
        });
}

document.addEventListener('DOMContentLoaded', loadMarks);
