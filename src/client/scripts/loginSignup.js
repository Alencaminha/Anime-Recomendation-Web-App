let signupUsername;
let signupPassword;
let signupEmail;
let loginUsername;
let loginPassword;

signUp = () => {
    signupUsername = document.getElementById("signupUsername").value;
    signupPassword = document.getElementById("signupPassword").value;
    signupEmail = document.getElementById("signupEmail").value;

    fetch("http://localhost:3000/createuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: signupUsername,
            password: signupPassword,
            email: signupEmail
        })
    });
    // TODO Add fields validation
    window.location.href = "login.html";
}

loginAuthentication = () => {
    loginUsername = document.getElementById("loginUsername").value;

    fetch("http://localhost:3000/readuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: loginUsername
        })
    })
    .then(res => res.json())
    .then(data => loginAuthorization(data));
};

loginAuthorization = (data) => {
    loginPassword = document.getElementById("loginPassword").value;

    if (loginPassword == data.password) {
        sessionStorage.setItem("loggedUser", data.username);
        window.location.href = "profile.html";
    } else {
        alert("Usuário e/ou senha está incorreto!");
    }
}

document.getElementById("loginUsername").addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
        loginAuthentication();
    }
});

document.getElementById("loginPassword").addEventListener("keypress", (event)=> {
    if (event.key === "Enter") {
        loginAuthentication();
    }
});
