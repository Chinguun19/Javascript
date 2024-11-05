document.getElementById("checkButton").onclick = function() {
    let number = document.getElementById("numberInput").value;
    number = Number(number);
    let zero = 0 

    if ((number % 4 === zero ) && (number % 100 > zero)) {
        document.getElementById("result").textContent =  number + " undur jil";
    } else if 
         (number % 400 === zero) {
            document.getElementById("result").textContent = number + " undur jil";
        } else {
         document.getElementById("result").textContent =  number + " undur jil bish"
        };
    };
