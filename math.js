#!/usr/bin/env node
var args = process.argv.slice(2);
var operator = args[0].toLowerCase();
args = args.slice(1);

if (args.length < 2) {
	console.log("missing args");
}
else {
	console.log(args.reduce(calculate));
}

function calculate(a, b) {
	if(operator == 'add') {
		return parseFloat(a) + parseFloat(b);
	}
	else if(operator == 'multiply') {
		return parseFloat(a) * parseFloat(b);
	}
	else if(operator == 'subtract') {
		return parseFloat(a) - parseFloat(b);	
	}
	else if(operator == 'divide') {
		return parseFloat(a) / parseFloat(b);
	}
	else {
		return "invalid operator: " + operator;
	}
}