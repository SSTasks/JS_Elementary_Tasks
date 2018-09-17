describe('Testing task№4', function() {

    // main function
    describe('Main function', function() {
        let options = [
            {
                enter: 12345,
                exit: 0
            },
            {
                enter: 12345437,
                exit: 34543
            },
            {
                enter: -12345,
                exit: 'Значение введено некорректно'
            }
        ];

        it('Enter correct value. Expect type of result "Number"', function() {
            let result = definePalindrome(options[0].enter);
            assert.equal(typeof result, 'number');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = definePalindrome(options[2].enter);
            assert.equal(typeof result, 'object');
        });

        it(`Enter "${options[0].enter}". Expect that palindrome will be undefined`, function () {
            let result = definePalindrome(options[0].enter);
            assert.equal(result, options[0].exit);
        });

        it(`Enter "${options[1].enter}". Expect that palindrome will be defined`, function () {
            let result = definePalindrome(options[1].enter);
            assert.equal(result, options[1].exit);
        });
    });

    // validation function
    describe('Validation function', function(){
        let options = [
            {
                enter: 12345,
                exit: true
            },
            {
                enter: -12345,
                exit: 'Значение введено некорректно'
            },
            {
                enter: "qwert",
                exit: 'Значение введено некорректно'
            },
            {
                enter: "",
                exit: 'Значение не введено'
            }
        ];

        it(`Enter "${options[0].enter}". Should return true`, function(){
            let result = isValid4(options[0].enter);
            assert.equal(result, options[0].exit);
        });

        for (let i = 1; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect string with error description`, function(){
                let result = isValid4(options[i].enter);
                assert.equal(result.reason, options[i].exit);
            });
        }
    });
});
