function login()
{
    let x = document.forms['loginform']['username'].value;
    sessionStorage.setItem("Username", x);
}
// function signin()
// {
//     let y = document.forms['signinform']['uname'].value;
//     sessionStorage.setItem("Username", y);
// }

// export {login}