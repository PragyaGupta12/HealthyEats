// import {login} from './userData.js'

// // document.write(`<div id="user1">${val}</div>`);
let getVal=sessionStorage.getItem("Username")
const val=document.getElementById("user")
val.innerHTML=getVal
val.appendChild(getVal)