import { addDisplayValue, getDisplayValue, setDisplayValue } from "./ui.js";

let operation = null;
let num1 = 0, num2 = 0;

//Funciones para agregar el valor de num1 y num2
export function addNum1 (num) {
    num1 += num;
}
export function addNum2 (num) {
    num2 += num;
}
//Funciones para obtener num1 y num2
export function getNum1 () {
    return num1;
}
export function getNum2 () {
    return num2;
}
//Funciones para establecer el valor de num1 y num2
export function setNum1 (num){
    num1 = num;
}
export function setNum2 (num){
    num2 = num;
}

//Función para obtener la operación actual
export function getOperation () {
    return operation;
}
//Función para establecer operation a null
export function setOperationNull () {
    operation = null;
}

export function plus () {
    if (operation) calculate();
    operation = "plus";
    addDisplayValue("+");
};

export function minus () {
    if (operation) calculate();
    operation = "minus";     
    addDisplayValue("-");
};

export function times () {
    if (operation) calculate();
    operation = "times";
    addDisplayValue("*");
};

export function divide () {
    if (operation) calculate();
    operation = "divide";
    addDisplayValue("/");
};

export function calculate () {

    console.log("Calculate: " + num1, " |", operation, " |", num2);
    
    let total = 0;
    let op = "";

    if(operation == "plus"){
        total = Number(num1) + Number(num2);
        op = "+";
    }
    else if(operation == "minus"){
        total = num1 - num2; 
        op = "-";
    }
    else if(operation == "times"){
        total = num1 * num2;
        op = "*";
    }
    else if (operation == "divide"){
        if (num2 == 0)
            setDisplayValue("Error");
        else
            total = num1 / num2;
        op = "/";
    }
    else
        alert ("Operación inválida");
    if (total != 0 && getDisplayValue() != "Error") {
        setDisplayValue(total);

        document.getElementById("h-area").value += num1 + " " + op + " " + num2 + " = " + total +"\n";

        num1 = total;
        num2 = 0;
    }
    operation = null;

}
