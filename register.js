const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("username").value;
    const pass = document.getElementById("pswd").value;

    fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => {
            const existUser = users.find(u => u.username === userName);

            if (existUser) {
                alert("User already exists. Please login.");
                window.location.href = "login.html";
            }

            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: userName,
                    password: pass
                })
            });
        })
        .then(() => {
            alert("Registration successful");
            window.location.href = "../login.html";
            }
        )
        .catch(() => {
            alert("Error 404: Something went wrong");
        });
});
