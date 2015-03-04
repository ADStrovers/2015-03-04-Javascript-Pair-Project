var score = 0
var question_one = parseInt(prompt("What is the scientific name for water?\n1. H2O\n2. CO2\n3. H1N1\n4. Water\n\nEnter the number of your choice below."));

console.log(question_one)

if (question_one === 1){
	alert("Correct!");
  ++score
} else {
	alert("Wrong!");
}