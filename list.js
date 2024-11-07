let todos = [];

function addOne(newTodo){
    todos.push(newTodo);
}

function editStatus(index, status) {
    let item = todos[index];
    item.status = status;
}

function editName(index, name){
    let name2 = todos[index];
    name2.name = name;
}


function deleteOne(index,index2) {
    todos.splice(index,index2)
}
addOne({name: "Hool hiih", status: "TODO"});
addOne({name: "Hool hiih", status: "TODO"});
addOne({name: "Hool hiih", status: "TODO"});
editStatus(1, "Done");
editName(2,"Ayga ugaah")
console.log(todos)
deleteOne(0,1);

console.log(todos)