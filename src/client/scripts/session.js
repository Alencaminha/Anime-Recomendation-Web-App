window.onload = () => {
    if (sessionStorage.getItem("loggedUserId") == null) {
        window.location.href = "login.html";
    }
}

quit = () => {
    sessionStorage.setItem("loggedUserId", null);
}
window.onload = () => {
    fetch("http://localhost:3000/readuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: sessionStorage.getItem("loggedUserId")
        })
    })
    .then(res => res.json())
    .then(userData => {
        document.getElementById("usernameIdentification").innerHTML = "Olá, " + userData.username;
        // For user input box
    });
}

updateUser = (fieldToChange, newValue) => {
    fetch("http://localhost:3000/updateuser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                field: fieldToChange,
                value: newValue,
                id: sessionStorage.getItem("loggedUserId")
            })
        });
}