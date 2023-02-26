import QuizAnswers from '../QuizAnswers/QuizAnswers'

function generateRandomAnswer() {
  let answer = "";
  let possibleChars = "            abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 20; i++) {
    answer += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return answer;
}



const Quiz = () => {
  const DUMMY_ANSWERS = [];

  const numAnswers = Math.floor(Math.random() * 25) + 8;

  for (let i = 0; i < 16; i++) {
    DUMMY_ANSWERS.push(generateRandomAnswer());
  }

  return (
    <QuizAnswers answers={DUMMY_ANSWERS} />
  )
}

export default Quiz;