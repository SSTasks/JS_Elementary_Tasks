function tickets(min, max){

    let reg = /^\d+$/;
    if(reg.test(min) && reg.test(max) && parseInt(min)<=parseInt(max)) {
        if(min.length==6 && max.length==6) {
            let arrMin = [0,0,0,0,0,0];
            let easyMethod = 0;
            let hardMethod = 0;

            for (let i = parseInt(min); i < parseInt(max)+1; i++) {
                let num = i.toString();
                let leftNum = 0;
                let rightNum= 0;
                let evenNum= 0;
                let oddNum = 0;

                for(let j=0; j<num.length; j++){//array with numbers
                    arrMin[arrMin.length-j-1]=num[num.length-j-1];
                }

                //create a variable with the sum of the left and right sides of the number
                for(let k=0; k<arrMin.length/2; k++){
                    leftNum += +arrMin[k];
                    rightNum += +arrMin[k+3];
                }

                //create a variable with the sum of even and odd numbers
                for(let k=0; k<arrMin.length; k++){
                    if(arrMin[k]%2){
                        oddNum += +arrMin[k];
                    } else{
                        evenNum += +arrMin[k];
                    }
                }

                //calculate each of the methods
                easyMethod += leftNum===rightNum ? 1 : 0;
                hardMethod += oddNum===evenNum ? 1 : 0;
            }

            //check out the winning method
            if(easyMethod>hardMethod){
                return `Победил простой метод - ${easyMethod}, против - ${hardMethod}`
            } else if (easyMethod<hardMethod){
                return `Победил сложный метод - ${hardMethod}, против - ${easyMethod}`
            } else return `Ни один из методов не победил`;

        } else{
            return {
                status: 'failed',
                reason: 'Значение должно содержать 6 цифр'
            }
        }
    }else {
        return {
            status: 'failed',
            reason: 'Значение не введено или введено некорректно'
        }
    }
}