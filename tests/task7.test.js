describe('Testing task№7', function() {

    // main function
    describe('Main function', function() {
        let validOpt = {
            opt_1: {
                enter: [5, 15],
                exit: [5,8,13]
            },
            opt_2: {
                enter: [2],
                exit: [13,21,34,55,89]
            }
        };

        let invalidOpt = {
            enter: [5, -15],
            exit: 'invalid'
        };

        it('Enter correct value. Expect type of result "Array"', function() {
            let result = rangeFib(validOpt.opt_1.enter[0], validOpt.opt_1.enter[1]);
            assert(Array.isArray(result));
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = rangeFib(invalidOpt.enter[0], invalidOpt.enter[1]);
            assert.equal(typeof result, 'object');
        });

        for (opt in validOpt) {
            it(`Enter "${validOpt[opt].enter}". Expect array with the numbers`, function() {
                let result = rangeFib(validOpt[opt].enter[0], validOpt[opt].enter[1]);
                assert.deepEqual(result, validOpt[opt].exit);
            });
        }
    });

    // validation function
    describe('Validation function', function() {
        let validOpt = {
            enter: [5, 15],
            exit: true
        };

        let invalidOpt = {
            invalid_1: {
                enter: [5, -15],
                exit: 'invalid'
            },
            invalid_2: {
                enter: [5, "a"],
                exit: 'invalid'
            },
            empty: {
                enter: ["", 15],
                exit: 'empty'
            },
            minMoreMax: {
                enter: [15, 5],
                exit: 'minMoreMax'
            }
        };

        it(`Enter "${validOpt.enter}". Should return true`, function() {
            let result = isValid7(validOpt.enter[0], validOpt.enter[1]);
            assert.equal(result, validOpt.exit);
        });

        for (let opt in invalidOpt) {
            it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function() {
                let result = isValid7(invalidOpt[opt].enter[0], invalidOpt[opt].enter[1]);
                assert.equal(result.reason, invalidOpt[opt].exit);
            });
        }
    });

    //if Fibonacci number between min amd max
    describe('Function defines numbers in the range', function() {
        let validOpt = {
            opt_1: {
                enter: [5, 15],
                exit: [5, 8, 13]
            },
            opt_2: {
                enter: [9, 11],
                exit: 'В этом промежутке нет чисел Фибоначчи'
            }
        };

        it(`Enter "${validOpt.opt_1.enter}". Expect array with numbers`, function() {
            let result = fibInRange(validOpt.opt_1.enter[0], validOpt.opt_1.enter[1]);
            assert.deepEqual(result, validOpt.opt_1.exit);
        });

        it(`Enter "${validOpt.opt_2.enter}". Expect the msg in this interval there are no numbers`, function() {
            let result = fibInRange(validOpt.opt_2.enter[0], validOpt.opt_2.enter[1]);
            assert.equal(result, validOpt.opt_2.exit);
        });
    });

    //if Fibonacci number has length
    describe('Function defines numbers with the length', function() {
        let validOpt = {
            opt_1: {
                enter: 1,
                exit: [1,1,2,3,5,8]
            },
            opt_2: {
                enter: 2,
                exit: [13,21,34,55,89]
            }
        };

        for (let opt in validOpt) {
            it(`Enter "${validOpt[opt].enter}". Expect array with numbers`, function() {
                let result = fibWithLength(validOpt[opt].enter);
                assert.deepEqual(result, validOpt[opt].exit);
            });
        }
    });
});
