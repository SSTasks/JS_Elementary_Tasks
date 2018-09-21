function areaOfTriangle(arr){
    let checkValid = isValid3(arr);

    if (!checkValid.status) {
        let arrOfAreas = getAreas(arr); //run getAreas() and get array of areas

        if (!arrOfAreas.status) {
            let arrOfCopy = sortTriangle(arr, arrOfAreas); //run sortTriangle() and get sort array
            let arrOfNames = arrOfCopy.map( (triangle) => triangle.vertices);//get only names

            return arrOfNames;

        } else return arrOfAreas;

    } else {
        return checkValid;
    }
}

function isValid3(arr) {
    for (let i = 0; i < arr.length; i++) {
        let reg = /^([0-9]*[.])?[0-9]+$/;

        let a = arr[i].a,
            b = arr[i].b,
            c = arr[i].c;

        if (a && b && c ) {
            if (reg.test(a) && reg.test(b) && reg.test(c)){
                console.log(`triangle №${i+1} is valid`);
            } else return {
                status: 'failed',
                reason: 'invalid'
            }
        } else return {
            status: 'failed',
            reason: 'empty'
        }
    }

    return true;
}


function getAreas(arr) {
    let arrOfAreas = [];

    for (let i = 0; i < arr.length; i++) {
        let a = parseInt(arr[i].a);
        let b = parseInt(arr[i].b);
        let c = parseInt(arr[i].c);

        let p = (a + b + c) / 2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        //if area is NaN, one of the values was entered incorrectly
        if(isNaN(area)){
            return {
                status: 'failed',
                reason: 'incorrectSides'
            }
        } else {
            arrOfAreas.push(area);
        }
    }

    return arrOfAreas;
}


function sortTriangle(arr, arrOfAreas) {
    let arrOfCopy = arr.slice();

    for (let j = 0; j < arr.length - 1; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (arrOfAreas[k] > arrOfAreas[k + 1]) {
                let tmp = arrOfAreas[k];
                arrOfAreas[k] = arrOfAreas[k + 1];
                arrOfAreas[k + 1] = tmp;

                tmp = arrOfCopy[k];
                arrOfCopy[k] = arrOfCopy[k + 1];
                arrOfCopy[k + 1] = tmp;
            }
        }
    }

    return arrOfCopy;
}