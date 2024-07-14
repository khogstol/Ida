document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Ida+Kristian' && password === 'elskerDeg') {
        alert('Login successful!');
        window.location.href = 'klokka/klokka.html';
    } else {
        document.getElementById('error').style.display = 'block';
    }
});
