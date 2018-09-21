describe('Testing task№6', function() {

    // main function
    describe('Main function', function() {
        let validOpt = {
            enter: [5, 5],
            exit: '3,4,5,6,7'
        };

        let invalidOpt = {
            enter: [5, -5],
            exit: 'invalid'
        };

        it('Enter correct value. Expect type of result "String"', function() {
            let result = numberSequence(validOpt.enter[0], validOpt.enter[1]);
            assert.equal(typeof result, 'string');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = numberSequence(invalidOpt.enter[0], invalidOpt.enter[1]);
            assert.equal(typeof result, 'object');
        });

        it(`Enter "${validOpt.enter}". Expect string with the numbers`, function() {
            let result = numberSequence(validOpt.enter[0], validOpt.enter[1]);
            assert.equal(result, validOpt.exit);
        });
    });

    // validation function
    describe('Validation function', function() {
        let validOpt = {
            enter: [5, 5],
            exit: true
        };

        let invalidOpt = {
            invalid_1: {
                enter: [5, -5],
                exit: 'invalid'
            },
            invalid_2: {
                enter: [5, "a"],
                exit: 'invalid'
            },
            empty: {
                enter: [5],
                exit: 'empty'
            }
        };

        it(`Enter "${validOpt.enter}". Should return true`, function() {
            let result = isValid6(validOpt.enter[0], validOpt.enter[1]);
            assert.equal(result, validOpt.exit);
        });

        for (let opt in invalidOpt) {
            it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function() {
                let result = isValid6(invalidOpt[opt].enter[0], invalidOpt[opt].enter[1]);
                assert.equal(result.reason, invalidOpt[opt].exit);
            });
        }
    });
});
