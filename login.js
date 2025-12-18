document.getElementById("loginForm").addEventListener("submit", e=> {
    e.preventDefault();

    const username = document.getElementById("loginUname").value;
    const password = document.getElementById("loginPswd").value;

    fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then(ip=> {
            const user = ip.find(u=>u.username === username && u.pswd === password);

            if (!user) {
                alert("User not found. Please sign up.");
                window.location.href = "register.html";
                return;
            }

            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Login successful");
            window.location.href = "index.html";
        })
        .catch(()=>alert("error"));
});
