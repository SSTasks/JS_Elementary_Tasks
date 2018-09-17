describe('Testing task№2', function() {

    // main function
    describe('Main function', function() {
        let options = [
            {
                enter: [
                    {
                        width:1,
                        height:1
                    },
                    {
                        width:1,
                        height:1
                    }
                ],
                exit: 0
            },
            {
                enter: [
                    {
                        width:1,
                        height:1
                    },
                    {
                        width:2,
                        height:2
                    }
                ],
                exit: 1
            },
            {
                enter: [
                    {
                        width:2,
                        height:2
                    },
                    {
                        width:1,
                        height:1
                    }
                ],
                exit: 2
            },
            {
                enter: [
                    {
                        width:-1,
                        height:1
                    },
                    {
                        width:2,
                        height:2
                    }
                ],
                exit: 'Значения введены некорректно'
            }
        ];

        it('Enter correct value. Expect type of result "Number"', function() {
            let result = envelopes(options[0].enter[0], options[0].enter[1]);
            assert.equal(typeof result, 'number');
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = envelopes(options[3].enter[0], options[3].enter[1]);
            assert.equal(typeof result, 'object');
        });

        for (let i = 0; i < options.length-1; i++) {
            it(`Enter correct value. Expect result ${options[i].exit}`, function () {
                let result = envelopes(options[i].enter[0], options[i].enter[1]);
                assert.equal(result, options[i].exit);
            });
        }
    });

    // validation function
    describe('Validation function', function(){
        let options = [
            {
                enter: [
                    {
                        width:1,
                        height:1
                    },
                    {
                        width:2,
                        height:2
                    }
                ],
                exit: true
            },
            {
                enter: [
                    {
                        width:-1,
                        height:1
                    },
                    {
                        width:2,
                        height:2
                    }
                ],
                exit: 'Значения введены некорректно'
            },
            {
                enter: [
                    {
                        width:"a",
                        height:1
                    },
                    {
                        width:2,
                        height:2
                    }
                ],
                exit: 'Значения введены некорректно'
            },
            {
                enter: [
                    {
                        width:"",
                        height:1
                    },
                    {
                        width:2,
                        height:2
                    }
                ],
                exit: 'Не все значения введены'
            }
        ];

        let w1 = options[0].enter[0].width,
            w2 = options[0].enter[1].width,
            h1 = options[0].enter[0].height,
            h2 = options[0].enter[1].height;

        it(`Enter "${w1}, ${h1}, ${w2}, ${h2}". Should return true`, function(){
            let result = isValid2(options[0].enter[0], options[0].enter[1]);
            assert.equal(result, options[0].exit);
        });

        for (let i = 1; i < options.length; i++) {
            let w1 = options[i].enter[0].width,
                w2 = options[i].enter[1].width,
                h1 = options[i].enter[0].height,
                h2 = options[i].enter[1].height;

            it(`Enter "${w1}, ${h1}, ${w2}, ${h2}". Expect string with error description`, function(){
                let result = isValid2(options[i].enter[0], options[i].enter[1]);
                assert.equal(result.reason, options[i].exit);
            });
        }
    });

});
