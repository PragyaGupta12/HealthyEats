// import {login} from './userData.js'

// // document.write(`<div id="user1">${val}</div>`);
let val=sessionStorage.getItem("Username")
const val1=document.getElementById("user")
val1.innerHTML=val
val1.appendChild(val)