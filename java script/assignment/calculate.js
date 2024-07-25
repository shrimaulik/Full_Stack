function num(value){
   
    document.getElementById("result").value+=value;
     
}
function clear() {
    document.getElementById('result').value = '';
}

function back() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}
function eqal() {
    let expression = document.getElementById('result').value;
    if (expression) {
        try {
            let result = eval(expression);
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }
}


// var result='';
// if(id === "add")
//     result="additiom :" +(a+b);

//     if(id === "sub")
//     result="sub :" +(a-b);

//     if(id === "mul")
//     result="mul :" +(a*b);

//     if(id === "div")
//     result="div :" +(a/b);
// // function eqal(){
// //     document.getElementById("res").innerHTML =result;
// // }


