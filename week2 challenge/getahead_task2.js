const fs = require('fs') 

var maxLength = 0;
var input = fs.readFileSync('./test-input.txt').toString().split("\n"); // reads the test-input.txt file
var out = maxBalancedParentheses(input[0]);
console.log(out); // prints the size of the longest contiguous substring of balanced parentheses


function maxBalancedParentheses(input) {
	var stack = [];
	var length = 0;
	for(let i=0; i<input.length; i++)
	{
		let parenthesis = input[i];
		if(parenthesis == '(')
			stack.push(parenthesis);
		else if (parenthesis == ')' && stack.length>0)
			{
				stack.pop();
				length+=2;
			}
		if(stack.length==0)
			maxLength = Math.max(maxLength,length);
	}
	return maxLength;
}
