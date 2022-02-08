const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate?: ", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);


	// This line closes the connection to the command line interface.
	reader.close()

	if(tokens.length > 3) //Check if there are more than 3 arguments. (For example: + 1 2 3)
	{
		console.log("Please only enter 3 arguments. (1 symbol and 2 numbers)");
		return;
	}

	if(mathSymbol == "+") console.log(num1 + num2); //Addition
	if(mathSymbol == "-") console.log(num1 - num2); //Subtraction
	if(mathSymbol == "*") console.log(num1 * num2); //Multiplication
	if(mathSymbol == "sqrt") console.log(Math.sqrt(num1)); //Sqaureroot

	//Division (With error checking to prevent division by 0)
	if(mathSymbol == "/") {
		if(num1 == 0 || num2 == 0) console.log("Cannot divide by 0.");
		else console.log(num1 / num2);
	}

});
