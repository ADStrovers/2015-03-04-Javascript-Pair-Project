var score = 0
var question_one = parseInt(prompt("What is the scientific name for water?\n1. H2O\n2. CO2\n3. H1N1\n4. Water\n\nEnter the number of your choice below."));

console.log(question_one)

if (question_one === 1){
	alert("Correct!");
  ++score
} else {
	alert("Wrong!");
}

var question_two = parseInt(prompt("Which of the following is not a football position?\n1. Quarterback\n2. Nickleback\n3. Defensive Lineman\n4. Tight End\n\nEnter the number of your choice below."));

console.log(question_two)

if (question_one === 2){
	alert("Correct!");
  ++score
} else {
	alert("Wrong!");
}