loginAuthentication = () => {
    let insertedUsername = document.getElementById("usernameLogin").value;

    fetch("http://localhost:3000/readuser", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: insertedUsername
        })
    })
    .then(res => res.json())
    .then(data => loginAuthorization(data));
};

loginAuthorization = (data) => {
    let insertedPassword = document.getElementById("passwordLogin").value;

    if (insertedPassword == data.password) {
        window.location.href = "profile.html";
    }
}