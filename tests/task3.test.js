describe('Testing task№3', function() {

    // main function
    describe('Main function', function() {
        let options = [
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: []
            },
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: "",
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: {}
            },
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: 3,
                        b: 3,
                        c: 3.3
                    },
                    {
                        vertices: 'ABC2',
                        a: 2,
                        b: 2,
                        c: 2.2
                    }
                ],
                exit: ['ABC2', 'ABC1']
            }
        ];

        it('Enter correct value. Expect type of result "Array"', function() {
            let result = areaOfTriangle(options[0].enter);
            assert(Array.isArray(result));
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = areaOfTriangle(options[1].enter);
            assert.equal(typeof result, 'object');
        });

        it(`Enter correct value. Expect result array with sorted names`, function () {
            let result = areaOfTriangle(options[2].enter);
            assert.equal(result.toString().toString(), options[2].exit.toString());
        });
    });

    // validation function
    describe('Validation function', function(){
        let options = [
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: true
            },
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: "",
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: 'Не все значения введены'
            }
        ];

        it(`Enter correct value. Should return true`, function(){
            let result = isValid3(options[0].enter);
            assert.equal(result, options[0].exit);
        });

        it(`Enter incorrect value. Expect string with error description`, function(){
            let result = isValid3(options[1].enter);
            assert.equal(result.reason, options[1].exit);
        });

    });

    // function return array with areas
    describe('Function counts areas ', function(){
        let options = [
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: [ 1.8373622397339073, 4.134065039401293 ]
            },
            {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: -2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ],
                exit: 'Значения введены некорректно'
            }
        ];

        it(`Enter correct value. Expect array with areas`, function(){
            let result = getAreas(options[0].enter);
            assert.equal(result.toString(), options[0].exit.toString());
        });

        it(`Enter incorrect value. Expect string with error description`, function(){
            let result = isValid3(options[1].enter);
            assert.equal(result.reason, options[1].exit);
        });

    });

    // function return sorted array
    describe('Function sorts object in array', function(){
        let options = [
            {
                enter1: [
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    },
                    {
                        vertices: 'ABC1',
                        a: 2,
                        b: 2,
                        c: 2.2
                    }
                ],
                enter2: [ 4.134065039401293, 1.8373622397339073 ],
                exit: [
                    {
                        vertices: 'ABC1',
                        a: 2,
                        b: 2,
                        c: 2.2
                    },
                    {
                        vertices: 'ABC2',
                        a: 3,
                        b: 3,
                        c: 3.3
                    }
                ]
            },
            {
                enter1: [
                    {
                        vertices: 'ABC3',
                        a: 5,
                        b: 5,
                        c: 5
                    },
                    {
                        vertices: 'ABC4',
                        a: 4,
                        b: 4,
                        c: 4
                    }
                ],
                enter2: [ 10.825317547305483, 6.928203230275509 ],
                exit: [
                    {
                        vertices: 'ABC4',
                        a: 4,
                        b: 4,
                        c: 4
                    },
                    {
                        vertices: 'ABC3',
                        a: 5,
                        b: 5,
                        c: 5
                    }
                ]
            }
        ];

        for (let i = 0; i < options.length; i++) {
            it(`Enter correct value. Expect sorted array`, function () {
                let result = sortTriangle(options[i].enter1, options[i].enter1,);
                assert.equal(result.toString(), options[i].exit.toString());
            });
        }
    });
});
