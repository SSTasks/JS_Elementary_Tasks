function chessBoard(h,w,s){

    if(h && w && s) {
        let reg = /^\d+$/;
        if ((reg.test(h)) && (reg.test(w))) {
            let board = "";
            for (let i = 0; i < h; i++) {
                for (let j = 0; j < w; j++) {
                    board += i % 2 === 1 ? ` ${s}` : `${s} `;
                }
                board += '\n';
            }
            return board;
        } else return {
            status: 'failed',
            reason: 'Значение введено некорректно'
        }
    } else return {
        status: 'failed',
        reason: 'Не все ячейки заполнены'
    }
}
