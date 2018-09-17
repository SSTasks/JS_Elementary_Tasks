
//task 1
function chessBoardRun(n) {
    let v = document.form1.elements;//get inputs

    //run the main function
    let result = chessBoard(v[0].value, v[1].value, v[2].value);

    if (!result.status) {
        console.log(result);
    } else {
        errorHandler(result.reason, n);
    }
}


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

    //run the main function
    let result = envelopes(env1, env2);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

//task 3
function runAreaOfTriangle(n) {
    let text = document.querySelectorAll("textarea")[0].value;//get value

    //run the main function
    let result = areaOfTriangle(triangles);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}
let triangles = [
    {
        vertices: 'ABC1',
        a: 4,
        b: 4,
        c: 4.36243563
    },
    {
        vertices: 'ABC2',
        a: 5,
        b: 5,
        c: 5.36
    },
    {
        vertices: 'ABC3',
        a: 3,
        b: 3,
        c: 3.36
    },
    {
        vertices: 'ABC4',
        a: 2,
        b: 2,
        c: 3
    }
];


//task4
function runDefinePalindrome(n) {
    let value = document.form4.elements[0].value;//get value

    //run the main function
    let result = definePalindrome(value);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}


//task5
function runTickets(n) {
    let v = document.form5.elements;//get inputs

    //run the main function
    let result = tickets(v[0].value, v[1].value);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

//task6
function runNumberSequence(n) {
    let v = document.form6.elements;//get inputs

    //run the main function
    let result = numberSequence(v[0].value, v[1].value);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}


//task7
function runRangeFib(n) {
    let v = document.form7.elements;//get inputs

    //run the main function
    let result = rangeFib(v[0].value, v[1].value);

    if (!result.status){
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}


//success handling function
function successHandler(text, n) {
    document.querySelectorAll(".result")[n].innerHTML=`Результат: ${text}`;
    console.log(text);
}

//error handling function
function errorHandler(text, n) {
    console.log(text);
    document.querySelectorAll(".result")[n].style="color:red";
    document.querySelectorAll(".result")[n].innerHTML=text;
    setTimeout(()=>{
        document.querySelectorAll(".result")[n].style="color:#212529";
        document.querySelectorAll(".result")[n].innerHTML="";
    },2000);
}