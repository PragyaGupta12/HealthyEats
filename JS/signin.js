window.onload = function () {

    const signinButton = document.getElementById("form-btn");

    signinButton.addEventListener("click", (e) => {

        const username = document.getElementById('uname').value
        const password = document.getElementById('pass').value
        const passwordAgain = document.getElementById('passagain').value
        const obj = { name: username, pass: password,re_pass: passwordAgain}
        const JSONObj = JSON.stringify(obj)
        if(JSONObj !== ''){
            localStorage.setItem("userdata", JSONObj);
        }
    })
}