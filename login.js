const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUname").value;
    const password = document.getElementById("loginPswd").value;

    fetch("http://localhost:3000/users")
        .then(function (res) {
            return res.json();
        })
        .then(function (ip) {
            const user = ip.find(function (u) {
                return u.username === username && u.password === password;
            });

            if (!user) {
                alert("User not found. Please sign up.");
                window.location.href = "register.html";
                return;
            }

            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Login successful");
            window.location.href = "index.html";
        })
        .catch(function () {
            alert("error");
        });
});
