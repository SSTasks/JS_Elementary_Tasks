function definePalindrome(p){
    let checkValid = isValid4(p);

    if (!checkValid.status) {
        p = (typeof p == 'number') ? p.toString() : p;// if p typeof number
        for (let i = 0; i < p.length; i++) {
            for (let j = 0; j < p.length; j++) {
                let pal = p.slice(i, j + i + 1); // get part of the number
                let palReverse = pal.split('').reverse().join(''); //reverse the part of the number

                if (pal == palReverse && pal.length > 1) return pal;
            }
        }
        return 0;

    } else return checkValid;
}


function isValid4(p) {
    //checking existence value
    if (p) {
        let reg = /^\d+$/;

        if (reg.test(p)) {
            return true;
        } else return {
            status: 'failed',
            reason: 'Значение введено некорректно'
        }
    } else return {
        status: 'failed',
        reason: 'Значение не введено'
    }
}