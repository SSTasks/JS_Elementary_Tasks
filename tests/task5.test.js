describe('Testing task№5', function() {

    // main function
    describe('Main function', function() {
        let validOpt = {
            enter: ["123456", "999999"],
            exit: true
        };

        let invalidOpt = {
            enter: ["qwerty", "999999"],
            exit: 'invalid'
        };

        it('Enter correct value. Expect type of result "String"', function() {
            let result = tickets(validOpt.enter[0], validOpt.enter[1]);
            assert.equal(typeof result, 'string');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = tickets(invalidOpt.enter[0], invalidOpt.enter[1]);
            assert.equal(typeof result, 'object');
        });
    });

    // validation function
    describe('Validation function', function() {
        let validOpt = {
            enter: ["123456", "999999"],
            exit: true
        };

        let invalidOpt = {
            invalid_1: {
                enter: ["qwerty", "999999"],
                exit: 'invalid'
            },
            invalid_2: {
                enter: ["999999", "123456"],
                exit: 'invalid'
            },
            empty: {
                enter: ["999999"],
                exit: 'empty'
            },
            notEnoughSymbol: {
                enter: ["12345", "999999"],
                exit: 'notEnoughSymbol'
            }
        };

        it(`Enter "${validOpt.enter}". Should return true`, function() {
            let result = isValid5(validOpt.enter[0], validOpt.enter[1]);
            assert.equal(result, validOpt.exit);
        });

        for (let opt in invalidOpt) {
            it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function() {
                let result = isValid5(invalidOpt[opt].enter[0], invalidOpt[opt].enter[1]);
                assert.equal(result.reason, invalidOpt[opt].exit);
            });
        }
    });

    // function converts numbers to an array
    describe('Function converts numbers to an array', function() {
        let validOpt = {
            opt_1: {
                enter: 100,
                exit: [0, 0, 0, 1, 0, 0]
            },
            opt_2: {
                enter: 123456,
                exit: [1, 2, 3, 4, 5, 6]
            }
        };

        for (let opt in validOpt)  {
            it(`Enter "${validOpt[opt].enter}". Expect array with the numbers`, function(){
                let result = numToArr(validOpt[opt].enter);
                assert.deepEqual(result, validOpt[opt].exit);
            });
        }
    });

    // function returns the result of a simple method
    describe('Use simple method', function() {
        let validOpt = {
            opt_1: {
                enter: [3,3,3,3,6,6],
                exit: 0
            },
            opt_2: {
                enter: [1,2,3,3,2,1],
                exit: 1
            }
        };

        it(`Enter "${validOpt.opt_1.enter}". Should return false`, function() {
            let result = simpleMethod(validOpt.opt_1.enter);
            assert.equal(result, validOpt.opt_1.exit);
        });

        it(`Enter "${validOpt.opt_2.enter}". Should return true`, function() {
            let result = simpleMethod(validOpt.opt_2.enter);
            assert.equal(result, validOpt.opt_2.exit);
        });
    });

    // function returns the result of a hard method
    describe('Use simple method', function() {
        let validOpt = {
            opt_1: {
                enter: [3,3,3,3,6,6],
                exit: 1
            },
            opt_2: {
                enter: [1,2,3,3,2,1],
                exit: 0
            }
        };

        it(`Enter "${validOpt.opt_1.enter}". Should return true`, function() {
            let result = hardMethod(validOpt.opt_1.enter);
            assert.equal(result, validOpt.opt_1.exit);
        });

        it(`Enter "${validOpt.opt_2.enter}". Should return false`, function() {
            let result = hardMethod(validOpt.opt_2.enter);
            assert.equal(result, validOpt.opt_2.exit);
        });
    });
});
