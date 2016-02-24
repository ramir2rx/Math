#!/usr/bin/env node
// var args = process.argv.slice(2);
// var operator = args[0].toLowerCase();
// args = args.slice(1);


// if (args.length < 2) {
// 	console.log("missing args");
// }
// else {
// 	console.log(args.reduce(calculate));
// }
exports.calculate = function (a, b) {
	if(operator == 'add') {
		return +a + +b;
	}
	else if(operator == 'multiply') {
		return a * b;
	}
	else if(operator == 'subtract') {
		return a - b;	
	}
	else if(operator == 'divide') {
		return a / b;
	}
	else {
		return "invalid operator: " + operator;
	}
}

