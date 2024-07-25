function num(value){
   
    document.getElementById("result").innerHTML=value;
     
}
function clear() {
    document.getElementById('result').innerHTML = '';
}

function back() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').innerHTML = currentValue.slice(0, -1);
}
function eqal() {
    let expression = document.getElementById('result').innerHTML;
    if (expression) {
        try {
            let result = eval(expression);
            document.getElementById('result').innerHTML = result;
        } catch (error) {
            document.getElementById('result').innerHTML = 'Error';
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


