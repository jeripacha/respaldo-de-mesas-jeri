document.getElementById('submit').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const messageElement = document.getElementById('message');
    if (username) {
        messageElement.textContent = `¡Hola, ${username}! Gracias por visitarnos.`;
    } else {
        messageElement.textContent = 'Por favor, ingresa un nombre de usuario.';
    }
});