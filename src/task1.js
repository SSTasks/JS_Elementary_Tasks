function chessBoard(h,w,s) {
    //get height, width and symbol
    let checkValid = isValid1(h, w, s);

    if (!checkValid.status) {
        let board = "";

        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                board += i % 2 === 1 ? ` ${s}` : `${s} `;
            }
            board += '\n';
        }

        return board;

    } else {
        return checkValid;
    }
}


function isValid1(h, w, s) {
    //checking existence height, width and symbol
    if (h && w && s) {
        let reg = /^\d+$/;

        //checking the height and width is a number or not
        if (reg.test(h) && reg.test(w) && parseInt(h) && parseInt(w)) {
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

