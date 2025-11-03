import { plus, minus, divide, times, calculate, getOperation, addNum1, addNum2, getNum1, getNum2, setOperationNull, setNum1, setNum2} from "./math.js";
import { addDisplayValue } from "./ui.js";

    let display = document.getElementById("display");
    //La variable "operation", "num1" y "num2" ahora están en "math.js", se manipulan con funciones
    let show = true;

    function add(value) {
        if (!getOperation())
            addNum1(value);
        else
            addNum2(value);

        addDisplayValue(value);
    }

        for (let i = 0; i <= 9; i++) {
            document.getElementById("b" + i).addEventListener("click", function () {
            add(i.toString());
            console.log("num1: " , getNum1(), "| num2: ", getNum2());
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === ""+i) {
                console.log(getOperation());
                add(i.toString());
                console.log("num1: " , getNum1(), "num2: ", getNum2());
            }
        });
    }
    
    document.getElementById("b-clear").addEventListener("click", function() {
        display.value = "";
        setOperationNull();
        setNum1(0);
        setNum2(0);
    });

    document.getElementById("b-equal").addEventListener("click", calculate);

    document.addEventListener("keydown", function(event){
        if (event.key === "+")
            plus();
    });

    document.addEventListener("keydown", function(event){
        if (event.key === "-")
            minus();
    });

    document.addEventListener("keydown", function(event){
        if (event.key === "*")
            times();
    });

    document.addEventListener("keydown", function(event){
        if (event.key === "/")
            divide();
    });

    document.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            calculate();
        }
    });

    document.getElementById("b-plus").addEventListener("click", plus);
    document.getElementById("b-minus").addEventListener("click", minus);
    document.getElementById("b-times").addEventListener("click", times);
    document.getElementById("b-divide").addEventListener("click", divide);
