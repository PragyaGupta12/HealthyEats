window.onload = function () {

    // const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("form-btn");
    // const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {

        // e.preventDefault();
        // const name = loginForm.username.value;
        // const pass = loginForm.password.value;
        // if (name !== '' && pass !== '' && pass) {
        //     sessionStorage.setItem("username", name);
        //     sessionStorage.setItem("password", pass);
        // }

        // if (name === sessionStorage.getItem("username", name) && pass === sessionStorage.getItem("password", pass)) {
        //     alert("You have successfully logged in.");
        // } // else {
        //     loginErrorMsg.style.opacity = 1;
        // }
        const username = document.getElementById('form-username').value
        const password = document.getElementById('form-password').value
        const obj = { name: username, pass: password}
        const JSONObj = JSON.stringify(obj)
        localStorage.setItem("userdata", JSONObj);
    })
}