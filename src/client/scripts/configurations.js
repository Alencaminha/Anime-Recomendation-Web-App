let username = sessionStorage.getItem("loggedUser");

alterUserData = (data, source) => {
    switch (data) {
        case "username":
            fetch("http://localhost:3000/updateusername", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newusername: source.value,
                    oldusername: username
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                sessionStorage.setItem("loggedUser", source.value);
                source.value = "";
            });
            break;

        case "password":
            fetch("http://localhost:3000/updatepassword", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password: source.value,
                    username: username
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                source.value = "";
            });
            break;

        case "email":
            fetch("http://localhost:3000/updateemail", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: source.value,
                    username: username
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                source.value = "";
            });
            break;
    }
}

deleteAccount = () => {
    fetch("http://localhost:3000/deleteuser", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                sessionStorage.setItem("loggedUser", null);
                window.location.href = "index.html";
            });
}
