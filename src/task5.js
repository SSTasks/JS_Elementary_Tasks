function tickets(min, max){
    let checkValid = isValid5(min, max);

    if (!checkValid.status) {
        let simpleMethodCounter = 0,
            hardMethodCounter = 0;

        for (let i = parseInt(min); i < parseInt(max)+1; i++) {
            let arr = numToArr(i);// run numToArr() get array with numbers

            //run easy and hard method and count the result of each of them
            simpleMethodCounter += simpleMethod(arr);
            hardMethodCounter += hardMethod(arr);
        }

        //check out the winning method
        if (simpleMethodCounter > hardMethodCounter) {
            return `Победил простой метод - ${simpleMethodCounter}, против - ${hardMethodCounter}`
        } else if (simpleMethodCounter < hardMethodCounter){
            return `Победил сложный метод - ${hardMethodCounter}, против - ${simpleMethodCounter}`
        } else return `Ни один из методов не победил`;

    } else return checkValid;
}


function isValid5(min, max) {
    if (min && max) {
        let reg = /^\d+$/;
        if (reg.test(min) && reg.test(max) && parseInt(min) <= parseInt(max)) {
            if (min.length == 6 && max.length == 6) {
                return true;
            } else return {
                status: 'failed',
                reason: 'Значение должно содержать 6 цифр'
            }
        } else return {
            status: 'failed',
            reason: 'Значения введены некорректно'
        }
    } else return {
        status: 'failed',
        reason: 'Значения не введены'
    }
}

// function converts numbers to an array
function numToArr(index) {
    let arr = [0,0,0,0,0,0];
    let numToStr = index.toString();

    for (let j = 0; j < numToStr.length; j++) {//array with numbers
        arr[arr.length-j-1] = parseInt(numToStr[numToStr.length-j-1]);
    }
    return arr;
}

//run simple method
function simpleMethod(arr) {
    //create a variable with the sum of the left and right sides of the number
    let counter = 0,
        leftNum = 0,
        rightNum = 0;

    for (let i = 0; i < arr.length/2; i++) {
        leftNum += parseInt(arr[i]);
        rightNum += parseInt(arr[i+arr.length/2]);
    }

    counter = leftNum===rightNum ? 1 : 0;
    return counter;
}

//run hard method
function hardMethod(arr) {
    //create a variable with the sum of the even and odd numbers
    let counter = 0,
        evenNum = 0,
        oddNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2) {
            oddNum += +arr[i];
        } else evenNum += +arr[i];
    }

    counter = oddNum===evenNum ? 1 : 0;
    return counter;
}