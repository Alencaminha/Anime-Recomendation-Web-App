const signupUsername = document.getElementById("signupUsername");
const signupPassword = document.getElementById("signupPassword");
const signupEmail = document.getElementById("signupEmail");
const loginUsername = document.getElementById("usernameLoginField");
const loginPassword = document.getElementById("passwordLoginField");

signUp = () => {
    fetch("http://localhost:3000/createuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: signupUsername.value,
            password: signupPassword.value,
            email: signupEmail.value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Status code: " + data.statusCode);
    });
}

login = () => {
    fetch("http://localhost:3000/validatelogin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: loginUsername.value,
            password: loginPassword.value
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.authenticated) {
            sessionStorage.setItem("loggedUserId", data.id);
            window.location.href = "profile.html";
        } else {
            alert("Usuário e/ou senha está incorreto!");
        }
    });
};

const passwordToggle = document.getElementById("passwordVisibilityButton");
passwordToggle.addEventListener('click', () => {
    const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    loginPassword.setAttribute('type', type);
    passwordToggle.classList.toggle('fa-eye-slash');
});

[loginUsername, loginPassword].forEach(element => {
    element.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            login();
        }
    });
});
