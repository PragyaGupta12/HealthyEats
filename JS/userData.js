window.onload = function () {

    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("form-btn");
    // const loginErrorMsg = document.getElementById("login-error-msg");
    
    loginButton.addEventListener("click", (e) => {

        // e.preventDefault();
        const name = loginForm.username.value;
        const pass = loginForm.password.value;
        localStorage.setItem("username", name);
        localStorage.setItem("password", pass);

        // if (name === sessionStorage.getItem("username", name) && pass === sessionStorage.getItem("password", pass)) {
        //     alert("You have successfully logged in.");
        // } // else {
        //     loginErrorMsg.style.opacity = 1;
        // }
    })
}