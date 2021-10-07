let firstName = [
	'Ol',
	'RZA',
	'Ghost',
	'GZA',
	'Capp',
	'Method',
	'Red',
	'Dirty',
	'God',
	'Inspectah',
];
let lastName = [
	'Mastermind',
	'Mind',
	'Kwan',
	'Masta',
	'Killah',
	'Man',
	'Cappadonna',
	'Ninja',
	'Knight',
	'Worlock',
];
document.querySelector('button').addEventListener('click', generate);
//we declare the input for the function in order to retrieve the value from the answer that is chosen
function generate() {
	// by adding whats on the left of the equal sign we create a variable
	const color = document.getElementById('color').value;
	const shape = document.getElementById('shape').value;
	const cereal = document.getElementById('cereal').value;
	const swag = document.getElementById('swag').value;
	const line = document.getElementById('line').value;
	// create variable named firstNameIndex and assign it the value of the combined inputs
	//we then add a Number function to convert our string input to a number from the index
	// ex: Number ('1') = 1
	let firstNameIndex =
		Number(color) +
		Number(shape) +
		Number(cereal) +
		Number(swag) +
		Number(line);
	//create a varible for last name index with the same outputs
	let lastNameIndex =
		Number(color) +
		Number(shape) +
		Number(cereal) +
		Number(swag) +
		Number(line);

	document.querySelector('.wuTangName').innerHTML =
		firstName[firstNameIndex] + ' ' + lastName[lastNameIndex];
}
