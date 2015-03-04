// Variable and function creation

var score = 0;

var question_array = [];

var question_one = {question_text:"What is the scientific name for water?", correct_answer:"\n1. H2O", incorrect_answers:"\n2. CO2\n3. H1N1\n4. Water", correct_answer_number: 1}

var answer_prompt = "Enter the number of your choice below.";

function check_answer(question_answer, correct_answer){
  if (question_answer === correct_answer){
  	return alert("Correct!");
    ++score;
  } else {
  	return alert("Wrong!");
  }
}

// -- Game --

var question_one_answer = parseInt(prompt(question_one.question_text + question_one.correct_answer + question_one.incorrect_answers + "\n" + answer_prompt));

console.log(question_one_answer);

check_answer(question_one_answer, question_one.correct_answer_number);

// if (question_one_answer === 1){
//   alert("Correct!");
//   ++score;
// } else {
//   alert("Wrong!");
// }

// var question_two = parseInt(prompt("Which of the following is not a football position?\n1. Quarterback\n2. Nickleback\n3. Defensive Lineman\n4. Tight End\n\nEnter the number of your choice below."));
//
// console.log(question_two);
//
// if (question_two === 2){
//   alert("Correct!");
//   ++score;
// } else {
//   alert("Wrong!");
// }
//
// var question_three = parseInt(prompt("In what country is Mount Everest located?\n1. Paraguay\n2. China\n3. Africa\n4. Tibet\n\nEnter the number of your choice below."));
//
// console.log(question_three);
//
// if (question_three === 4){
//   alert("Correct!");
//   ++score;
// } else {
//   alert("Wrong!");
// }
//
// console.log("Your score is: " + score);
//
// alert("You got " + score + " correct out of 3.");