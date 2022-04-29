// just some code

// Set up some functions that change styling so we know the functions are working. 
const header1 = document.getElementById('header1');
// header1.style.backgroundColor = "aliceblue";

const container = document.getElementById('container');
// container.style.color = "#333";


const display = document.getElementById('display');
// display.style.backgroundColor = '#f0f0f0';
let dispText;

const buttonsNum = document.querySelectorAll('.num');
let btnNumText;
let operatorRun = false;
let operator;
let result;

buttonsNum.forEach(element => {
    // element.style.backgroundColor = 'lightgreen';
    // element.style.border = '1px solid coral';
    btnNumText = element.innerText;
    element.addEventListener('click', ( ) => {
        btnNumText = element.innerText;
        // console.log("Button text is: ", btnNumText);
        dispText = display.innerText;
        return(btnNumText);
    });
    dispText = element.addEventListener('click', () => {
        
        console.log(operatorRun);
        if(operatorRun == false){
            display.innerText = dispText + btnNumText;
            dispText = display.innerText;
            // console.log("The new display text is: ", dispText);
            return(dispText);
        }
        else {
            display.innerText = btnNumText;
            dispText = display.innerText;
            operatorRun = false;
            return(dispText);
        }
           
    })
      
});

let a; 
let b;
let x;
let y;
let z;
let w;

const add = function(a, b) {
    // console.log("Addition");
    x = a + b;
    console.log(a, b, x);
    return(x)
}

const sub = function(a,b,) {
    // console.log("Subtraction");
    y = a - b;
    // console.log(a, b, y);
    return(y);
}

const mult = function(a, b) {
    // console.log("multiplication");
    z = a * b;
    // console.log(a, b, z);
    return(z);
}

const div = function(a, b) {
    // console.log("division");
    w = (a / b).toFixed(4);
    // console.log(a, b, w);
    return(w);
}


// add(3,5);
// sub(15, 12);
// mult(15, 45);
// div(54, 3);
// console.log("The answer is, ", x, y, z, w);

const buttonsOps = document.querySelectorAll('.ops');
let btnOpsText;
buttonsOps.forEach(element => {
    // element.style.border = '1px solid coral';
    operator = element.addEventListener('click', () => {
        if(operator != null){
    
            b = Number(display.innerText);
            // console.log("The operator is: ", operator, "And a & b are: ", a, b);
            operate(operator, a, b);
            display.innerText = result;
            a = result;
            b = null;
            operatorRun = true;
            
            // console.log("The result is: ", result);
            //set the operator to be the operations button that was just clicked;
            operator = element.innerText;
            // console.log("the operator now is: ", operator);
            // console.log("a and b are: ", a, b);

            return(operator);
            }
        else {
            operator = element.innerText;
            console.log("The button text is: ", operator);
            a = Number(dispText);
            // console.log("a is: ", a);
            display.innerText = 0;
            operatorRun = true;
        };
        
    })

});

const operate = function(operator, a, b){
    // console.log("The operator is in the operator function: ", operator);
    switch(operator) {
        case 'X':
            // console.log('mult');
            result = mult(a,b);
            console.log("z is: ", result);
            break;
        case '+':
            // console.log('add');
            result = add(a,b);
            console.log("x is: ", result);
            break;
        case '-':
            // console.log('sub');
            result = sub(a,b);
            console.log("y is: ", result);
            break;
        case "/":
            // console.log('div');
            result = div(a,b);
            console.log("w is: ", result);
            break;
    }
}

const btnEqual = document.getElementById('equal');

b = btnEqual.addEventListener('click', (e) =>{
    b = Number(display.innerText);
    // console.log("a now is: ", a);
    // console.log("b is: ", b);
    // console.log("operator is: ", operator);
    return b;
        
})

btnEqual.addEventListener('click', (e) => {
    if(a == null) {
        display.innerText = "????";
        operator = null;
        b = null;
        operatorRun = true;
        equalRun = false;
        
    } 
    else if(operator == '/' && display.innerText == 0){
        display.innerText = "Do not divide by 0!";
        operatorRun = true
    }
   
    else {
        operate(operator, a, b);
        display.innerText = result;
        // console.log(result);
        operatorRun = true;
        equalRun = true;
    }
    // a = null;
    // b = null;
    // result = null;
    // operator = null;
    
})

// operate('*', 3, 5);
// operate('+', 15, 25);
// operate('-', 24, 36);
// operate('/', 36, 24);

// console.log("x: ", x, "y: ", y, "z: ", z, "w: ", w);

const btnClear = document.getElementById('clear');

btnClear.addEventListener('click', (e) => {
    a = null;
    b = null;
    result = null;
    display.innerText = 0;
    operator = null;

})