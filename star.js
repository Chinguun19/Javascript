let rows = 5;

for (let i = 1; i <= rows; i++) {

    let row = " ".repeat(rows - i);
    
  
    for (let j = 1; j <= i; j++) {
        row += (j === 1 || j === i || i === rows) ? "* " : "  ";
    }
    
    console.log(row.trimEnd());
}
