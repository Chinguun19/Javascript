document.getElementById("checkButton").onclick = function() {
    let number = document.getElementById("numberInput").value;
    number = Number(number);
    let zero = 0

    if (number >= zero )  {
        document.getElementById("result").textContent =  number + " + too";
        } else {
         document.getElementById("result").textContent =  number + " - too";
        };
    };
