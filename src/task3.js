function areaOfTriangle(arr){

    try {
        let arrOfAreas = [];
        let arrOfCopy = arr.slice();
        let arrOfNames = [];

        for (let i = 0; i < arr.length; i++) {
            let a = arr[i].a;
            let b = arr[i].b;
            let c = arr[i].c;

            let p = (a + b + c) / 2;
            let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

            if(isNaN(area)){
                return {
                    status: 'failed',
                    reason: 'Значение не введено или введено некорректно'
                }
            }
            arrOfAreas.push(area);
        }

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

                arrOfNames[k] = arrOfCopy[k].vertices;
            }
        }
        console.log(arrOfAreas);
        return arrOfNames;
    } catch{
        return {
            status: 'failed',
            reason: 'Значение введено некорректно'
        }
    }
}