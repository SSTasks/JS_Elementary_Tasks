// import {chessBoard} from "/src/task1.js";
// import {envelopes} from "./src/task2.js";
// import {areaOfTriangle} from "./src/task3.js";
// import {defindPalindrome} from "./src/task4.js";
// import {integers} from "./src/task6.js";
//let chessBoard = require("./src/task1.js");


//task 1
function chessBoardRun(n){
    let v = document.form1.elements;//get inputs
    let result = chessBoard(v[0].value, v[1].value, v[2].value);

    if (typeof result == 'string') {
        console.log(result);
    } else {
        error(result.reason, n);
    }
}
//console.log(chessBoard(5,7,'▒'));

//task 2
function runEnvelopes(n) {
    let v = document.form2.elements;//get inputs

    let env1 = {
        width:v[0].value,
        height:v[1].value
    }

    let env2 = {
        width:v[2].value,
        height:v[3].value
    }

    let result = envelopes(env1, env2);

    if (typeof result == 'number') {
        document.querySelectorAll(".result")[n].innerHTML=`Результат: ${result}`;
        console.log(result);
    } else {
        error(result.reason, n);
    }
}
//console.log(envelopes(env1, env2));

//task 3
function runAreaOfTriangle(n){
    let text = document.querySelectorAll("textarea")[0].value;
    let result = areaOfTriangle(triangles);

    if (Array.isArray(result)) {
        document.querySelectorAll(".result")[n].innerHTML=`Результат: ${result}`;
        console.log(result);
    } else {
        error(result.reason, n);
    }
}
let triangles = [
    {
        vertices: 'ABC1',
        a: 30,
        b: 30,
        c: 22.36243563
    },
    {
        vertices: 'ABC2',
        a: 111,
        b: 221,
        c: 221.36
    },
    {
        vertices: 'ABC3',
        a: 15,
        b: 25,
        c: 22.36
    },
    {
        vertices: 'ABC4',
        a: 6,
        b: 5,
        c: 5
    }
];

//console.log("New array", areaOfTriangle(triangles));


//task4
function runDefinePalindrome(n){
    let value = document.form4.elements[0].value;

    let result = definePalindrome(value);

    if (typeof result == 'string') {
        document.querySelectorAll(".result")[n].innerHTML=`Результат: ${result}`;
        console.log(result);
    } else {
        error(result.reason, n);
    }
}
//console.log(defindPalindrome("10350512"));


//task5
function runTickets(n){
    let v = document.form5.elements;

    let result = tickets(v[0].value, v[1].value);

    if (typeof result == 'string') {
        document.querySelectorAll(".result")[n].innerHTML=`Результат: ${result}`;
        console.log(result);
    } else {
        error(result.reason, n);
    }
}

//task6
function runNumberSequence(n){
    let v = document.form6.elements;

    let result = numberSequence(v[0].value, v[1].value);

    if (typeof result == 'string') {
        document.querySelectorAll(".result")[n].innerHTML=`Результат: ${result}`;
        console.log(result);
    } else {
        error(result.reason, n);
    }
}
// console.log(integers(8, 7));


//task7
function runRangeFib(n){
    let v = document.form7.elements;

    let result = rangeFib(v[0].value, v[1].value);

    if (Array.isArray(result)){
        document.querySelectorAll(".result")[n].innerHTML=`Результат: ${result}`;
        console.log(result);
    } else {
        error(result.reason, n);
    }
}


//error handling function
function error(text, n){
    console.log(text);
    document.querySelectorAll(".result")[n].style="color:red";
    document.querySelectorAll(".result")[n].innerHTML=text;
    setTimeout(()=>{
        document.querySelectorAll(".result")[n].style="color:#212529";
        document.querySelectorAll(".result")[n].innerHTML="";
    },2000);
}