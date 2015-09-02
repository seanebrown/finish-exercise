
var sentence = "the quick brown fox"

var arraysent = sentence.split(" ");

console.log(sentence)
console.log(arraysent)

var fin = []
for (var i=0; i<arraysent.length; i++)
{	
	var up = arraysent[i][0].toUpperCase();
	arraysent[i][0] = up;
	var res = arraysent[i].substring(1);
	var lower = arraysent[i][res]
	console.log(up + res);

};

