loginValidation = () => {
    let username = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;

    if (username === "teste" && password === "senha") {
        window.location.href = "profile.html";
    }
};