// function seterror(id,error){
//     element = document.getElementById(id);
//     element.getElementsByClassName('ferror')[0].innerHTML=error;
// }
// function validateform()
// {
//     var returnval=true; //this will make sure the form submits only when the returnval is true.
//     var contact = document.forms['loginform']['contact'].value
//     if(contact.length<10)
//     {
//        seterror('name','Please enter a valid phone number');
//        returnval = false;
//     }
//     return returnval;

// }
// document.getElementById("form-btn").onclick = function login() {
//     location.href = "G:\Angular\CWH\CWH\HealthyEats\afterlogin.html"
// }          

function login()
{
    let x = document.forms["loginform"]["username"].value
    // let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(isNaN(x)==true)
    {
        alert("hello phone")
    }
    else
    {
        alert("email")
    }
    // element = document.getElementById(form-btn); 
}
// login();

