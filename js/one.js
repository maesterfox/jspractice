var yourName = prompt("Yo, what's your name?");
if(yourName != null){
    document.getElementById("sayHello").innerHTML = "Hello " + yourName;} 
    else {
        alert("Please enter a name next time");
    }