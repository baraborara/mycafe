const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    const user = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    message.style.color = "green";
    message.innerHTML = "Register successful!";

    setTimeout(() => {
        window.location.href = "../login/index.html";
    }, 1000);

});
