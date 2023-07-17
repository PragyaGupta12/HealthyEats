window.onload = function () {
    // document.getElementById("user").innerHTML = sessionStorage.getItem("username");
    let text = localStorage.getItem("userdata");
    let obj = JSON.parse(text);
    document.getElementById("user").innerHTML = obj.name;
}
//the data being fetch is in JSON format