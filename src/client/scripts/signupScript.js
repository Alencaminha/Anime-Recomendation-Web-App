signUpValidation = () => {
    let signupUsername = document.getElementById("signupUsername");
    let signupPassword = document.getElementById("signupPassword");
    let signupEmail = document.getElementById("signupEmail");

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
    });
    // TODO Add fields validation
    window.location.href = "login.html";

}
