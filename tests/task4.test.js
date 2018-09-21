describe('Testing task№4', function() {

    // main function
    describe('Main function', function() {
        let validOpt = {
            opt_1: {
                enter: 12345,
                exit: 0
            },
            opt_2: {
                enter: 12325,
                exit: 232
            }
        };

        let invalidOpt = {
            enter: -12345,
            exit: 'invalid'
        };

        it('Enter correct value. Expect type of result "Number"', function() {
            let result = definePalindrome(validOpt.opt_1.enter);
            assert.equal(typeof result, 'number');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = definePalindrome(invalidOpt.enter);
            assert.equal(typeof result, 'object');
        });

        it(`Enter "${validOpt.opt_1.enter}". Expect that palindrome will be undefined`, function () {
            let result = definePalindrome(validOpt.opt_1.enter);
            assert.equal(result, validOpt.opt_1.exit);
        });

        it(`Enter "${validOpt.opt_2.enter}". Expect that palindrome will be defined`, function () {
            let result = definePalindrome(validOpt.opt_2.enter);
            assert.equal(result, validOpt.opt_2.exit);
        });
    });

    // validation function
    describe('Validation function', function(){
        let validOpt = {
            enter: 12345,
            exit: true
        };

        let invalidOpt = {
            invalid_1: {
                enter: -12345,
                exit: 'invalid'
            },
            invalid_2: {
                enter: "qwert",
                exit: 'invalid'
            },
            empty: {
                enter: "",
                exit: 'empty'
            }
        };

        it(`Enter "${validOpt.enter}". Should return true`, function(){
            let result = isValid4(validOpt.enter);
            assert.equal(result, validOpt.exit);
        });

        for (let opt in invalidOpt) {
            it(`Enter "${invalidOpt[opt].enter}". Expect string with error description`, function(){
                let result = isValid4(invalidOpt[opt].enter);
                assert.equal(result.reason, invalidOpt[opt].exit);
            });
        }
    });
});
