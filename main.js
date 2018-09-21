
// TASK 1
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


// TASK 2
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


// TASK 3
function runAreaOfTriangle(n) {
    let arrayOfTriangles = [];
    let triangles = document.querySelectorAll(".triangle");// get all the triangles

    for (let i = 0; i < triangles.length; i++) {
        let sidesOfTriangle = triangles[i].querySelectorAll("input");

        let triangle = {
            vertices: `ABC${i+1}`,
            a: sidesOfTriangle[0].value,
            b: sidesOfTriangle[1].value,
            c: sidesOfTriangle[2].value,
        };

        arrayOfTriangles.push(triangle);
    }

    //run the main function with arrayOfTriangles as argument
    let result = areaOfTriangle(arrayOfTriangles);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

// add one more triangle
function addTriangle() {
    let len = document.querySelectorAll(".triangle").length; // length collection of triangles
    let triangles = document.getElementById('triangles'); // get div let triangles by id
    let triangle = document.createElement('div'); // create empty triangle

    triangle.className = "triangle";
    triangle.innerHTML = `<span>Triangle ABC${len+1}: </span>`+
        '<input type="text" class="form-control" placeholder="side A">'+
        '<input type="text" class="form-control" placeholder="side B">'+
        '<input type="text" class="form-control" placeholder="side C">'+
        '<button type="button" class="btn btn-danger btn-sm mb-2" onclick="delTriangle()">✖</button>';

    triangles.appendChild(triangle);
}

// remove lest triangle
function delTriangle() {
    let triangles = document.querySelectorAll(".triangle");
    triangles[triangles.length-1].remove(triangles[triangles.length]); // del last elem of triangle's collection
}


// TASK 4
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


// TASK 5
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

// TASK 6
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


// TASK 7
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
    document.querySelectorAll(".result")[n].innerHTML = `Результат: ${text}`;
    console.log(`Результат: ${text}`);
}

//error handling function
function errorHandler(err, n) {
    let msg = "";
    console.log(err)
    switch (err) {
        case "invalid":
            msg = "Значения введены некорректно";
            break;
        case "empty":
            msg = "Не все значения введены";
            break;
        case "incorrectSides":
            msg = "Невозможно рассчитать площадь треугольника по заданным сторонам";
            break;
        case "notEnoughSymbol":
            msg = "Значение должно содержать 6 цифр";
            break;
        case "minMoreMax":
            msg = "Минимальное значение должно быть меньше максимального";
            break;
        default:
            msg = "Ошибка 102";
    }

    document.querySelectorAll(".result")[n].style = "color:red";
    document.querySelectorAll(".result")[n].innerHTML = msg;
    setTimeout(()=>{
        document.querySelectorAll(".result")[n].style = "color:#212529";
        document.querySelectorAll(".result")[n].innerHTML = "";
    },2000)
}