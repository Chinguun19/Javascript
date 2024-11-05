document.getElementById("checkButton").onclick = function() {
    let number = document.getElementById("numberInput").value;
    number = Number(number);
    let zero = 0

    if (number % 2 === zero )  {
        document.getElementById("result").textContent =  number + " бол тэгш тоо";
        } else {
         document.getElementById("result").textContent =  number + " бол сондгой тоо";
        };
    };
