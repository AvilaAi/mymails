

let buttons =document.getElementsByClassName("trash")
let p = document.createElement("div");
p.className  = "contact"
document.body.appendChild(p);
let newText = document.createTextNode("Jogging avec Jules samedi 10h00");
p.appendChild( newText );
p.addEventListener("mouseover",function(){p.style.color="blue"});

let contacts = document.getElementsByClassName("contact")


// var msg = contacts.length;
// document.getElementById("nombre").textContent= msg;
document.getElementById("nombre").textContent=contacts.length;

for (var i=0;i<contacts.length-1;i++){
  buttons[i].addEventListener(
  "click",function(){
  // document.body.removeChild(this.parentNode);
  console.log("click détecté");
  this.parentElement.remove();
  // var msg = contacts.length;
  document.getElementById("nombre").textContent= contacts.length;

})
}


let first= document.body.firstChild;
document.body.insertBefore(p,first);

for (var u=0; u<contacts.length;u++){contacts[u].addEventListener("mouseover",function(){this.style.color="red"})};
// contacts.addEventListener("mouseup",function(){contacts.style.color="red"});
