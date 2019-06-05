var names = [ 'Great Britian', 'Japan', 'India', 'Namibia', 'South Sudan', 'Canada' ];
var flags = [];
var colors = [
	'#F9A6A6',
	'#E1BADF',
	'#c7a7f0',
	'#68F476',
	'#F49768',
	'#F9E252',
	'#9BEDB9',
	'#9BEDE5',
	'#A6C7F9',
	'#C2A6F9',
	'#F9A6D5'
];

var chnageModeOn = true;
var done = true;

function showname(num) {
	document.getElementById('textbox').innerHTML = names[num];
}

function clearText() {
	document.getElementById('textbox').innerHTML = '';
}

function changePageColor() {
	if(chnageModeOn){
		var color = colors[Math.floor(Math.random() * colors.length)];
		document.querySelectorAll('*').forEach((e) => (e.style = 'background-color : ' + color));
	}
}

function setChangeMode(bool){
	chnageModeOn = bool;
}



