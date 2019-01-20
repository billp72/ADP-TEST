var calculate = function(left, right, operation){
	var result=0;
	if(typeof(left) === 'number' && typeof(right) === 'number'){
		
		switch(operation){
			case 'multiplication':
				result = left * right;
				break;
			case 'subtraction':
				result = left - right;
				break;
			case 'remainder':
				result = left % right;
				break;
			case 'addition':
				result = left + right;
				break;
			case 'division':
				result = left / right;
				break;
		}
	}

	return result;
}

module.exports = calculate;