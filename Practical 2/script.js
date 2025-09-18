document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const phone = document.getElementById('phone').value.trim();

  const user = { name, email, password, phone };

  // Save to localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Simulate AJAX POST
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
      alert('User registered successfully!');
      // Optional: redirect to user list
      window.location.href = 'users.html';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error registering user.');
    });
});
