function envelopes(a, b) {
    let checkValid = isValid2(a, b);

    if (!checkValid.status) {
        let aWidth = parseFloat(a.width),
            aHeight = parseFloat(a.height),
            bWidth = parseFloat(b.width),
            bHeight = parseFloat(b.height);

        if(aWidth<bWidth && aHeight<bHeight || aWidth<bHeight && aHeight<bWidth){
            return 1;
        }else if(aWidth>bWidth && aHeight>bHeight || aWidth>bHeight && aHeight>bWidth){
            return 2;
        }else return 0;

    } else return checkValid;
}


function isValid2(a, b) {
    if (a.width && b.width && a.height && b.height) {
        let reg = /^([0-9]*[.])?[0-9]+$/;

        if ((reg.test(a.width)) && (reg.test(b.width)) && (reg.test(a.height)) && (reg.test(b.height))) {
            return true;
        } else return {
            status: 'failed',
            reason: 'Значения введены некорректно'
        }
    } else return {
        status: 'failed',
        reason: 'Не все значения введены'
    }
}