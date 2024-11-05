document.getElementById("checkButton").onclick = function() {
       let number = document.getElementById("numberInput").value;
       number = Number(number);
       let zero = 0
   
       if ((number >= 90) && (number <= 100 )) {
           document.getElementById("result").textContent =  number + "% A";
       } else if 
            ((number >= 80) && (number <= 89 )) {
               document.getElementById("result").textContent = number + "% B";
           } else if 
             ((number >= 70) && (number <= 79 )) {
               document.getElementById("result").textContent = number + "% C";
             } else if 
             ((number >= 60) && (number <= 69 )) {
                document.getElementById("result").textContent = number + "% D";
             } else {
              ((number >= 0) && (number <= 100 ))
                document.getElementById("result").textContent = number + "% F"; 
              }   
              
            };  