

document.getElementById("checkButton").onclick = function(){
    let a 
let b 
let c 

    let values = document.getElementById("numberInput").value.split(",");

    a = Number(values[1].trim);
    b = Number(values[1].trim);
    c = (Math.floor((Math.abs(a - b) + (a + b)) / 2));
    document.getElementById("result").textContent = c;
    
}