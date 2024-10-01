document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission (we'll handle it)
    
    // Get the entered username and password
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Send a POST request to the server to validate the credentials
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'student ERP portal.html';
        } else {
            console.log('Invalid credentials. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
    });
});