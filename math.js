#!/usr/bin/env node
var args = process.argv.slice(2);
var operator = args[0].toLowerCase();
args = args.slice(1);

if (args.length < 2) {
	console.log("missing args");
}
else {
	console.log(calculate());
}

function calculate() {
	var total = parseFloat(args[0]);
	for (var i = 1; i < args.length; i++) {	
		if(operator == 'add') {
			total += parseFloat(args[i]);
		}
		else if(operator == 'multiply') {
			total *= parseFloat(args[i]);
		}
		else if(operator == 'subtract') {
			total -= parseFloat(args[i]);
		}
		else if(operator == 'divide') {
			total /= parseFloat(args[i]);
		}
		else {
			return "invalid operator: " + operator;
		}
	};
	return total;
}
