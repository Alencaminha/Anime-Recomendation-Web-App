const signupUsername = document.getElementById("signupUsername");
const signupPassword = document.getElementById("signupPassword");
const signupEmail = document.getElementById("signupEmail");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

showPassword = () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }
}

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
        console.log(data);
        if (data.statusCode == 200) {
            window.location.href = "login.html";
        }
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

[loginUsername, loginPassword].forEach(element => {
    element.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            login();
        }
    });
});
