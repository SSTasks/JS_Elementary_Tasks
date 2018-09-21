describe('Testing task№3', function() {

    // main function
    describe('Main function', function() {
        let validOpt = {
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
            exit: ['ABC1', 'ABC2']
        };

        let invalidOpt = {
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
        };

        it('Enter correct value. Expect type of result "Array"', function() {
            let result = areaOfTriangle(validOpt.enter);
            assert(Array.isArray(result));
        });

        it('Enter incorrect value. Expect type of result "Object"', function() {
            let result = areaOfTriangle(invalidOpt.enter);
            assert.equal(typeof result, 'object');
        });

        it(`Enter correct value. Expect result array with sorted names`, function () {
            let result = areaOfTriangle(validOpt.enter);
            assert.deepEqual(result, validOpt.exit);
        });
    });

    // validation function
    describe('Validation function', function() {
        let validOpt = {
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
        };

        let invalidOpt = {
            invalid_1: {
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
                exit: 'invalid'
            },
            invalid_2: {
                enter: [
                    {
                        vertices: 'ABC1',
                        a: "a",
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
                exit: 'invalid'
            },
            empty: {
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
                exit: 'empty'
            }
        };

        it(`Enter correct value. Should return true`, function(){
            let result = isValid3(validOpt.enter);
            assert.equal(result, validOpt.exit);
        });

        for (let opt in invalidOpt) {
            it(`Enter incorrect value. Expect string with error description`, function () {
                let result = isValid3(invalidOpt[opt].enter);
                assert.equal(result.reason, invalidOpt[opt].exit);
            });
        }

    });

    // function return array with areas
    describe('Function counts areas ', function(){
        let validOpt = {
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
            exit: [ 1.7320508075688772, 3.897114317029974 ]
        };

        let invalidOpt = {
            enter: [
                {
                    vertices: 'ABC1',
                    a: 5,
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
            exit: 'incorrectSides'
        };

        it(`Enter correct value. Expect array with areas`, function(){
            let result = getAreas(validOpt.enter);
            assert.deepEqual(result, validOpt.exit);
        });

        it(`Enter incorrect value. Expect string with error description`, function() {
            let result = getAreas(invalidOpt.enter);
            assert.equal(result.reason, invalidOpt.exit);
        });

    });

    // function return sorted array
    describe('Function sorts object in array', function() {
        let validOpt = {
            opt_1: {
                arg_1: [
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
                arg_2: [4.134065039401293, 1.8373622397339073],
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
            opt_2: {
                arg_1: [
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
                arg_2: [10.825317547305483, 6.928203230275509],
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
        };

        for (let opt in validOpt) {
            it(`Enter correct value. Expect sorted array`, function () {
                let result = sortTriangle(validOpt[opt].arg_1, validOpt[opt].arg_2);
                assert.deepEqual(result, validOpt[opt].exit);
            });
        }
    });
});
