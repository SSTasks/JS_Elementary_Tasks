describe('Testing task№1', function() {

	// main function
    describe('Main function', function() {
        let validOpt = {
            enter: [1, 2, "#"],
            exit: '# # \n'
        };

        let invalidOpt = {
            enter: [-1, 2, "#"],
            exit: 'invalid'
        };

    	it(`Enter ${validOpt.enter}. Expect type of result "String"`, function() {
            let result = chessBoard(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
            assert.equal(typeof result, 'string');
        });

        it(`Enter ${validOpt.enter}. Expect type of result "Object"`, function() {
            let result = chessBoard(invalidOpt.enter[0], invalidOpt.enter[1], invalidOpt.enter[2]);
            assert.equal(typeof result, 'object');
        });

        it(`Enter ${validOpt.enter}. Expect string with symbols`, function() {
            let result = chessBoard(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
            assert.equal(result, '# # \n');
        });
    });

    // validation function
	describe('Validation function', function(){
		let validOpt = {
            enter: [1, 2, "#"],
            exit: true
        };

        let invalidOpt = {
            invalid_1: {
                enter: [-1, 2, "#"],
                exit: 'invalid'
            },
            invalid_2: {
                enter: ["a", 2, "#"],
                exit: 'invalid'
            },
            empty: {
                enter: [1, 2],
                exit: 'empty'
            }
        };

        it (`Enter "${validOpt.enter}". Should return true`, function() {
            let result = isValid1(validOpt.enter[0], validOpt.enter[1], validOpt.enter[2]);
            assert.equal(result, validOpt.exit);
        });

        for (let opt in invalidOpt) {
            it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function(){
                let result = isValid1(invalidOpt[opt].enter[0], invalidOpt[opt].enter[1], invalidOpt[opt].enter[2]);
                assert.equal(result.reason, invalidOpt[opt].exit);
            });
        }
    });
});
