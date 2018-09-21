describe('Testing task№1', ()=>{
    // main function
    describe('Main function', ()=> {
        it('Enter 5, 5, "#". Expect type of result "String"', () => {
            let result = chessBoard(5, 5, "#");
            expect(typeof result).toBe('string');
        });

        it('Enter -5, 5, "#". Expect type of result "Object"', ()=> {
            let result = chessBoard("a", 5, "#");
            expect(typeof result).toBe('object');
        });

        it('Enter 1, 2, "#". Expect string with symbols', ()=> {
            let result = chessBoard(1, 2, "#");
            expect(result).toBe('# # \n');
        });
    });

    // validation function
    describe('Validation function', ()=> {
        let options = [
            {
                enter: [5, 5, "#"],
                exit: true
            },
            {
                enter: [-5, 5, "#"],
                exit: 'Значения введены некорректно'
            },
            {
                enter: ["a", 5, "#"],
                exit: 'Значения введены некорректно'
            },
            {
                enter: [5, 5],
                exit: 'Не все значения введены'
            }
        ];

        it(`Enter "${options[0].enter}". Should return true`, ()=> {
            let result = isValid1(options[0].enter[0], options[0].enter[1], options[0].enter[2]);
            expect(result).not.toBeFalsy();
        });

        for (let i = 1; i < options.length; i++) {
            it(`Enter "${options[i].enter}". Expect string with error description`, ()=> {
                let result = isValid1(options[i].enter[0], options[i].enter[1], options[i].enter[2]);
                expect(result.reason).toBe(options[i].exit);
            });
        }
    });
});




// describe("A spec (with setup and tear-down)", function() {
//     var foo;
//
//     beforeEach(function() {
//         foo = 0;
//         foo += 1;
//     });
//
//     afterEach(function() {
//         foo = 0;
//     });
//
//     it("is just a function, so it can contain any code", function() {
//         expect(foo).toEqual(1);
//     });
//
//     it("can have more than one expectation", function() {
//         expect(foo).toEqual(1);
//         expect(true).toEqual(true);
//     });
// });

