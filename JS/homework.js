// var difficulty = prompt('select the level of difficulty (easy,medium,hard)');
// console.log(difficulty);

// var selectedColor = 'red';
// var answer = prompt('Chooso one color from rainbow color (red, orange, yellow, green, blue, darkblue, violet)');
// console.log(answer);
// if(answer === 'red'){
// 	alert('You win!');
// }else if(answer === null){
// 	alert('See u next time');
// }else if(answer === ''){
// 	alert('u must enter smth');
// }else if (answer === 'orange'){
// 	alert('The remaining number of attempts - ' + count)
// }else if (answer === 'yellow'){
// 	alert('The remaining number of attempts - ' + count);
// }else if (answer === 'green'){
// 	alert('The remaining number of attempts - ' + count);
// }else if (answer === 'blue'){
// 	alert('The remaining number of attempts - ' + count);
// }else if (answer === 'darkblue'){
// 	alert('The remaining number of attempts - ' + count);
// }else if (answer === 'violet'){
// 	alert('The remaining number of attempts - ' + count);
// }else {
// 	alert('Entered value is incorrect, valid values are - red, orange, yellow, green, blue, darkblue, violet')
// }

var attemps = 0;
var correctAnswer = 'red';
var maxAttemps = 7;

var difficulty = prompt('select the level of difficulty (easy,medium,hard)');
console.log(difficulty);
switch(difficulty){
	case 'easy':
		maxAttemps = 7;
		break;
	case 'medium':
		maxAttemps = 3;
		break;
	case 'hard':
		maxAttemps = 1;
		break;
	default:
		alert('entered value is incorrect, default level is set to "easy"')
		break;
}

while (!(attemps >= maxAttemps || answer === correctAnswer || answer === null)) {
	var answer = prompt('Chooso one color from rainbow color (red, orange, yellow, green, blue, darkblue, violet)');
	console.log(answer);
	++attemps
	if(answer === correctAnswer){
		alert('You win!');
	}else if(answer === null){
		alert('See you next time');
	}else if(answer === ''){
		alert('You must enter smth');
	}else if (
		answer === 'orange'
		|| answer === 'yellow'
		|| answer === 'green'
		|| answer === 'blue'
		|| answer === 'darkblue' 
		|| answer === 'violet'
	){
		alert('The remaining number of attempts - ' + (maxAttemps - attemps));
	}else {
		alert('Entered value is incorrect, valid values are - red, orange, yellow, green, blue, darkblue, violet. The remaining number of attempts - ' + (maxAttemps - attemps));
	}
}

if(answer !== correctAnswer && attemps === maxAttemps){
	alert('You loose!');
}

