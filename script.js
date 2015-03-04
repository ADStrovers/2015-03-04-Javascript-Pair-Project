// Variable and function creation

var score = 0;

var question_array = [];

var question_one = {question_text:"What is the scientific name for water?", correct_answer:"\n1. H2O", incorrect_answers:"\n2. CO2\n3. H1N1\n4. Water", correct_answer_number: 1}

var question_two = {question_text:"Which of this is not a valid football position?", correct_answer:"\n2. Quarterback", incorrect_answers_1:"\n1. Nickleback", incorrect_answers_2:"\n3. Defensive Lineman\n4. Tight End", correct_answer_number: 1}

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

check_answer(question_one_answer, question_one.correct_answer_number);

var question_two_answer = parseInt(prompt(question_two.question_text + question_two.incorrect_answers_1 + question_two.correct_answer + question_two.incorrect_answers_2));

check_answer(question_two_answer, question_two.correct_answer_number);

var question_three = {question_text:"In what country is Mount Everest located?", correct_answer:"\n4. Tibet", incorrect_answers:"\n1. Paraguay\n2. China\n3. Africa",correct_answer_number: 4}

var question_three_answer = parseInt(prompt(question_three.question_text + question_three.incorrect_answers + question_three.correct_answer));

check_answer(question_three_answer, question_three.correct_answer_number);


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