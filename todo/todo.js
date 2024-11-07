document.getElementById("buttonAdd").onclick = function(){
    let text = document.getElementById("text").value
    document.getElementById("result").textContent = todos
}



const todos = [];

function addOne(newTodo){
    todos.push(newTodo);
}

function editStatus(index, status) {
    let item = todos[index];
    item.status = status;
}

function editName(){
    

}


function deleteOne() {
    
    
}

addOne({name: "Hool hiih", status: "TODO"});
addOne({name: "Hool hiih", status: "TODO"});
addOne({name: "Hool hiih", status: "TODO"});
editStatus(1, "Done");

console.log(todos)