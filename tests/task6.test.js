describe('Testing task№6', function() {

    // main function
    describe('Main function', function() {
        let options =  [
            {
                enter: [5, 5],
                exit: "3,4,5,6,7"
            },
            {
                enter: [5, -5],
                exit: 'Значения введены некорректно'
            }
        ];

        it('Enter correct value. Expect type of result "String"', function() {
            let result = numberSequence(options[0].enter[0], options[0].enter[1]);
            assert.equal(typeof result, 'string');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = numberSequence(options[1].enter[0], options[1].enter[1]);
            assert.equal(typeof result, 'object');
        });

        it(`Enter "${options[0].enter}". Expect string with the numbers`, function() {
            let result = numberSequence(options[0].enter[0], options[0].enter[1]);
            assert.equal(result, options[0].exit);
        });
    });

    // validation function
    describe('Validation function', function(){
        let options =  [
            {
                enter: [5, 5],
                exit: true
            },
            {
                enter: [5, -5],
                exit: 'Значения введены некорректно'
            },
            {
                enter: [5],
                exit: 'Не все значения введены'
            }
        ];

        it(`Enter "${options[0].enter}". Should return true`, function(){
            let result = isValid6(options[0].enter[0], options[0].enter[1]);
            assert.equal(result, options[0].exit);
        });

        for (let i = 1; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect string with error description`, function(){
                let result = isValid6(options[i].enter[0], options[i].enter[1]);
                assert.equal(result.reason, options[i].exit);
            });
        }
    });
});
