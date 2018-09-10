function envelopes(a, b){
    if(a.width && b.width && a.height && b.height) {
        let reg = /^([0-9]*[.])?[0-9]+$/;

        if ((reg.test(a.width)) && (reg.test(b.width)) && (reg.test(a.height)) && (reg.test(b.height))) {
            if(+a.width<+b.width && +a.height<+b.height || +a.width<+b.height && +a.height<+b.width){
                return 1;
            }else if(+a.width>+b.width && +a.height>+b.height || +a.width>+b.height && +a.height>+b.width){
                return 2;
            }else return 0;
        } else return {
            status: 'failed',
            reason: 'Значение введено некорректно'
        }
    } else return {
        status: 'failed',
        reason: 'Не все ячейки заполнены'
    }
}