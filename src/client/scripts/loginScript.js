loginAuthentication = () => {
    let loginUsername = document.getElementById("loginUsername");

    fetch("http://localhost:3000/readuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: loginUsername.value
        })
    })
    .then(res => res.json())
    .then(data => loginAuthorization(data));
};

loginAuthorization = (data) => {
    let loginPassword = document.getElementById("loginPassword");

    if (loginPassword.value == data.password) {
        window.location.href = "profile.html";
    } else {
        alert("Usuário e/ou senha está incorreto!");
    }
}
