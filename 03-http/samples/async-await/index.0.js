function getQuestion() {
  return fetch("https://opentdb.com/api.php?amount=1")
    .then(response => response.json())
    .then(json => json.results[0])
    .then(({ question, correct_answer }) => ({
      question,
      answer: correct_answer
    }));
}

function printQuestion({ question, answer }) {
  document.body.innerHTML = `
      <h1>${question}</h1>
      <h2>answer: ${answer}</h2>
    `;
}

getQuestion().then(printQuestion);
