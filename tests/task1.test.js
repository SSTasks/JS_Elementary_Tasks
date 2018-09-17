describe('Testing task№1', function() {

	// main function
    describe('Main function', function() {
    	it('Enter 5, 5, "#". Expect type of result "String"', function() {
            let result = chessBoard(5, 5, "#");
            assert.equal(typeof result, 'string');
        });

        it('Enter -5, 5, "#". Expect type of result "Object"', function() {
            let result = chessBoard("a", 5, "#");
            assert.equal(typeof result, 'object');
        });

        it('Enter 1, 2, "#". Expect result "# # "', function() {
            let result = chessBoard(1, 2, "#");
            assert.equal(result, '# # \n');
        });
    });

    // validation function
	describe('Validation function', function(){
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

        it(`Enter "${options[0].enter}". Should return true`, function(){
            let result = isValid1(options[0].enter[0], options[0].enter[1], options[0].enter[2]);
            assert.equal(result, options[0].exit);
        });

		for (let i = 1; i < options.length; i++) {
			it(`Enter "${options[i].enter}". Expect string with error description`, function(){
				let result = isValid1(options[i].enter[0], options[i].enter[1], options[i].enter[2]);
				assert.equal(result.reason, options[i].exit);
			});
		}
    });
   
});
