function definePalindrome(p){
    let reg = /^\d+$/;
    if(reg.test(p)) {
        for (let i = 0; i < p.length; i++) {
            for (let j = 0; j < p.length; j++) {
                let pal = p.slice(i, j + i + 1);
                if (pal == pal.split('').reverse().join('') && pal.length > 1) return pal;
            }
        }
        return "0";
    } else {
        return {
            status: 'failed',
            reason: 'Значение не введено или введено некорректно'
        }
    }
}