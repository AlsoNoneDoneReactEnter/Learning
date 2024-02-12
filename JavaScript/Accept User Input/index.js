// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox 

// let username;
// 
// username = window.prompt("Whats your username?")
// 
// console.log(username);


let username;

document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("myh1").textContent = `Hello ${username}`
}
 
// textContent /  onclick / function / value