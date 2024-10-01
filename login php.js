// Get the form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

// Add event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Send a POST request to the PHP file
  fetch('login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&password=${password}`
  })
  .then((response) => response.text())
  .then((message) => {
    if (message === 'Invalid username or password!') {
      // Display error message
      alert(message);
    } else {
      // Redirect to student ERP portal
      window.location.href = 'student ERP portal.html';
    }
  })
  .catch((error) => console.error('Error:', error));
});
