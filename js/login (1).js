const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const alertBox = document.getElementById("alertBox");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser === null){

        alertBox.style.color = "red";
        alertBox.innerHTML = "Account not found!";

        return;
    }

    if(username === savedUser.username &&
       password === savedUser.password){

        localStorage.setItem("isLoggedIn", "true");

        alertBox.style.color = "green";
        alertBox.innerHTML = "Login successful!";

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);

    } else {

        alertBox.style.color = "red";
        alertBox.innerHTML = "Wrong username or password!";
    }

});
