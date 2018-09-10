function numberSequence(n, m){
    let reg = /^\d+$/;
    if(reg.test(n) && reg.test(m)) {
        n = parseInt(n);
        m = parseInt(m);
        
        let arr = [];
        let start = Math.ceil(Math.sqrt(m));

        for (let i = start; i < start + n; i++) {
            arr.push(i);
        }
        return arr.join(',');
    }else{
        return {
            status: 'failed',
            reason: 'Значение не введено или введено некорректно'
        }
    }
}