function rangeFib(min, max){
    let checkValid = isValid7(min, max);

    if (!checkValid.status) {
        //check min and max
        if (max) {
            return fibInRange(min, max);
        } else { //check length
            return fibWithLength(min);
        }
    } else return checkValid;
}

//if Fibonacci number between min amd max
function fibInRange(min, max) {
    let getFib = 0;
    let fib = [1,1];
    let num = [];

    for (let i = 0; getFib < max; i++) {
        //for the first two iterations
        if (i >= 2) {
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
            getFib = fib[fib.length-1];
        } else getFib = fib[i];

        if (getFib >= min && getFib <= max) {
            num.push(getFib);
        }
    }

    if (num[0]){
        return num;
    } else return 'В этом промежутке нет чисел Фибоначчи';
}

//if Fibonacci number has length
function fibWithLength(len) {
    let getFib = 0;
    let fib = [1,1];
    let num = [];

    for (let i = 0; getFib.toString().length < +len+1; i++) {
        //for the first two iterations
        if (i >= 2) {
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
            getFib = fib[fib.length-1];
        } else getFib = fib[i];

        if (getFib.toString().length == len) {
            num.push(getFib);
        }
    }
    return num;
}


function isValid7(min, max) {
    if (min) {
        let reg = /^\d+$/;

        if (reg.test(min) && (reg.test(max) || (!max))) {
            if ((parseInt(min) < parseInt(max) || (!max)) && min!=0) {
                return true;
            } else return {
                status: 'failed',
                reason: 'Минимальное значение должно быть меньше максимального'
            }
        } else return {
            status: 'failed',
            reason: 'Значения введены некорректно'
        }
    } else return {
        status: 'failed',
        reason: 'Не все значения введены'
    }
}