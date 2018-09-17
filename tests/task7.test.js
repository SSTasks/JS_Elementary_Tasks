describe('Testing task№7', function() {

    // main function
    describe('Main function', function() {
        let options =  [
            {
                enter: [5, 15],
                exit: [5,8,13]
            },
            {
                enter: [2],
                exit: [13,21,34,55,89]
            },
            {
                enter: ["",5],
                exit: 'Не все значения введены'
            }
        ];

        it('Enter correct value. Expect type of result "Array"', function() {
            let result = rangeFib(options[0].enter[0], options[0].enter[1]);
            assert(Array.isArray(result));
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = rangeFib(options[2].enter[0], options[2].enter[1]);
            assert.equal(typeof result, 'object');
        });

        for (let i = 0; i < options.length-1; i++) {
            it(`Enter "${options[i].enter}". Expect array with the numbers`, function(){
                let result = rangeFib(options[i].enter[0], options[i].enter[1]);
                assert.equal(result.toString(), options[i].exit.toString());
            });
        }
    });

    // validation function
    describe('Validation function', function(){
        let options =  [
            {
                enter: [5, 15],
                exit: true
            },
            {
                enter: [15, 5],
                exit: 'Минимальное значение должно быть меньше максимального'
            },
            {
                enter: [5, -15],
                exit: 'Значения введены некорректно'
            },
            {
                enter: ["",5],
                exit: 'Не все значения введены'
            }
        ];

        it(`Enter "${options[0].enter}". Should return true`, function(){
            let result = isValid7(options[0].enter[0], options[0].enter[1]);
            assert.equal(result, options[0].exit);
        });

        for (let i = 1; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect string with error description`, function(){
                let result = isValid7(options[i].enter[0], options[i].enter[1]);
                assert.equal(result.reason, options[i].exit);
            });
        }
    });

    //if Fibonacci number between min amd max
    describe('Function defines numbers in the range', function(){
        let options =  [
            {
                enter: [5, 15],
                exit: [5,8,13]
            },
            {
                enter: [9, 11],
                exit: 'В этом промежутке нет чисел Фибоначчи'
            }
        ];

        it(`Enter "${options[0].enter}". Expect array with numbers`, function(){
            let result = fibInRange(options[0].enter[0], options[0].enter[1]);
            assert.equal(result.toString(), options[0].exit.toString());
        });

        it(`Enter "${options[0].enter}". Expect the msg in this interval there are no numbers`, function(){
            let result = fibInRange(options[1].enter[0], options[1].enter[1]);
            assert.equal(result, options[1].exit);
        });
    });

    //if Fibonacci number has length
    describe('Function defines numbers with the length', function(){
        let options =  [
            {
                enter: 1,
                exit: [1,1,2,3,5,8]
            },
            {
                enter: 2,
                exit: [13,21,34,55,89]
            }
        ];

        for (let i = 0; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect array with numbers`, function(){
                let result = fibWithLength(options[i].enter);
                assert.equal(result.toString(), options[i].exit.toString());
            });
        }
    });
});
