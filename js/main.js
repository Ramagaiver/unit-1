var secondid=document.getElementById("secondaryID");
var counter = 1;
console.log(secondid) 
secondid.addEventListener("click", function(){
    alert("Hello World!")
    secondid.innerHTML = "Clicked! " + counter;
    counter = counter + 1;
})