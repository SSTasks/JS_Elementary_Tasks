function rangeFib(min, max){
    let reg = /^\d+$/;
    if(reg.test(min) && (reg.test(max) || (!max))) {

        if((parseInt(min)<=parseInt(max) || (!max)) && min!=0) {
            let num = [];
            //check min and max
            if (max) {
                for (let i = 1; i < 30; i++) {
                    let getFib = fib(i);
                    if (getFib >= min && getFib <= max) {
                        num.push(getFib);
                    }
                }
            } else { //check length
                let len = min;
                for (let i = 1; i < 30; i++) {
                    let getFib = fib(i);
                    if (getFib.toString().length == len) {
                        num.push(getFib);
                    }
                }
            }
            return num;
        } else{
            return {
                status: 'failed',
                reason: 'Минимальное значение не может быть больше максимального или 0'
            }
        }
    }else{
        return {
            status: 'failed',
            reason: 'Значение не введено или введено некорректно'
        }
    }
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}