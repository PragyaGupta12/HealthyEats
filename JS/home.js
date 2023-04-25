import {login} from './userData.js'

// var val = sessionStorage.getItem("Username:"); 
// document.getElementById('user').innerHTML = val;
// // document.write(`<div id="user1">${val}</div>`);
const heading = document.getElementById("user")
const val=heading.innerHTML=sessionStorage.getItem("Username:")