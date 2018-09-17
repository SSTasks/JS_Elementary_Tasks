describe('Testing task№5', function() {

    // main function
    describe('Main function', function() {
        let options =  [
            {
                enter: ["123456", "999999"],
                exit: true
            },
            {
                enter: ["qwerty", "999999"],
                exit: 'Значения введены некорректно'
            }
        ];

        it('Enter correct value. Expect type of result "String"', function() {
            let result = tickets(options[0].enter[0], options[0].enter[1]);
            assert.equal(typeof result, 'string');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = tickets(options[1].enter[0], options[1].enter[1]);
            assert.equal(typeof result, 'object');
        });
    });

    // validation function
    describe('Validation function', function(){
        let options = [
            {
                enter: ["123456", "999999"],
                exit: true
            },
            {
                enter: ["999999"],
                exit: 'Значения не введены'
            },
            {
                enter: ["qwerty", "999999"],
                exit: 'Значения введены некорректно'
            },
            {
                enter: ["999999", "123456"],
                exit: 'Значения введены некорректно'
            },
            {
                enter: ["12345", "999999"],
                exit: 'Значение должно содержать 6 цифр'
            }
        ];

        it(`Enter "${options[0].enter}". Should return true`, function(){
            let result = isValid5(options[0].enter[0], options[0].enter[1]);
            assert.equal(result, options[0].exit);
        });

        for (let i = 1; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect string with error description`, function(){
                let result = isValid5(options[i].enter[0], options[i].enter[1]);
                assert.equal(result.reason, options[i].exit);
            });
        }
    });

    // function converts numbers to an array
    describe('Function converts numbers to an array', function(){
        let options = [
            {
                enter: 100,
                exit: [0,0,0,1,0,0]
            },
            {
                enter: 123456,
                exit: [1,2,3,4,5,6]
            }
        ];

        for (let i = 0; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect array with the numbers`, function(){
                let result = numToArr(options[i].enter);
                assert.equal(result.toString(), options[i].exit.toString());
            });
        }
    });

    // function returns the result of a simple method
    describe('Use simple method', function(){
        let options = [
            {
                enter: [3,3,3,3,6,6],
                exit: 0
            },
            {
                enter: [1,2,3,3,2,1],
                exit: 1
            }
        ];
        it(`Enter "${options[0].enter}". Should return false`, function(){
            let result = simpleMethod(options[0].enter);
            assert.equal(result, options[0].exit);
        });

        it(`Enter "${options[1].enter}". Should return true`, function(){
            let result = simpleMethod(options[1].enter);
            assert.equal(result, options[1].exit);
        });
    });

    // function returns the result of a hard method
    describe('Use simple method', function(){
        let options = [
            {
                enter: [3,3,3,3,6,6],
                exit: 1
            },
            {
                enter: [1,2,3,3,2,1],
                exit: 0
            }
        ];
        it(`Enter "${options[0].enter}". Should return true`, function(){
            let result = hardMethod(options[0].enter);
            assert.equal(result, options[0].exit);
        });

        it(`Enter "${options[1].enter}". Should return false`, function(){
            let result = hardMethod(options[1].enter);
            assert.equal(result, options[1].exit);
        });
    });
});
