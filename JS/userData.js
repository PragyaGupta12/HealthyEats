function login()
{
    var x = document.forms['loginform']['username'].value;
    console.log("Username:", x);
    sessionStorage.setItem("Username:", x);
}


