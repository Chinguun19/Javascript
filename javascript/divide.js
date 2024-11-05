document.getElementById("checkButton").onclick = function() {
       let number = document.getElementById("numberInput").value;
       number = Number(number);
       let zero = 0 
   
       if ((number % 3 === zero ) && (number % 5 === zero)) {
           document.getElementById("result").textContent =  number + " бол 3 болон 5т хуваагддаг тоо";
       } else if 
            (number % 3 === zero) {
               document.getElementById("result").textContent = number + " bol 3t huvaagddag too";
           } else if (number % 5 === zero) {
               document.getElementById("result").textContent = number + " bol 5t huvaagddag too";
           } else {
            document.getElementById("result").textContent = number + " Ali ni den ch huvaagdahgui too"
           };
       };
   