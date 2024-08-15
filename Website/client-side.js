
document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;

    if (!usernameRegex.test(username)) {
        alert("Invalid username format. It should only contain letters and digits.");
        event.preventDefault();
    }

    if (!passwordRegex.test(password)) {
        alert("Invalid password format. It should be at least 4 characters long, with at least one letter and one digit.");
        event.preventDefault();
    }
});
