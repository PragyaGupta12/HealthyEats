function login()
{
    let username = document.forms['loginform']['username'].value;
    sessionStorage.setItem("Username", username);
    let getVal=sessionStorage.getItem("Username");
    return document.getElementById("user").innerHTML=getVal;
}

