function numberSequence(n, m){
    let checkValid = isValid6(n, m);

    if (!checkValid.status) {
        n = parseInt(n);
        m = parseInt(m);

        let arr = [];
        let start = Math.ceil(Math.sqrt(m));

        for (let i = start; i < start + n; i++) {
            arr.push(i);
        }

        return arr.join(',');
    } else {
        return checkValid;
    }
}


function isValid6(n, m) {
    if (n && m) {
        let reg = /^\d+$/;
        if ((reg.test(n)) && (reg.test(m)) && parseInt(n) && parseInt(m)) {
            return true;
        } else return {
            status: 'failed',
            reason: 'invalid'
        }
    } else return {
        status: 'failed',
        reason: 'empty'
    }
}