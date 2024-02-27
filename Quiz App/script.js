document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
});
const quiz = [
  {
    questionId: 1,
    question: "What is the capital city of Pakistan?",
    answer: [
      { text: "Karachi", correct: false },
      { text: "Lahore", correct: false },
      { text: "Peshawar", correct: false },
      { text: "Islamabad", correct: true },
    ],
  },
  {
    questionId: 2,
    question:
      "Which mountain range is located in Pakistan and is home to the second-highest peak in the world, K2?",
    answer: [
      { text: "Himalayas", correct: false },
      { text: "Andes", correct: false },
      { text: "Karakoram Range", correct: true },
      { text: "Alps", correct: false },
    ],
  },
  {
    questionId: 3,
    question: "Who is the founder of Pakistan?",
    answer: [
      { text: "Muhammad Ali Jinnah", correct: true },
      { text: "Allama Iqbal", correct: false },
      { text: "Liaquat Ali Khan", correct: false },
      { text: "Ayub Khan", correct: false },
    ],
  },
  {
    questionId: 4,
    question: "Which river is known as the lifeline of Pakistan?",
    answer: [
      { text: "Chenab", correct: false },
      { text: "Jhelum", correct: false },
      { text: "Indus", correct: true },
      { text: "Ravi", correct: false },
    ],
  },
  {
    questionId: 5,
    question: "What is the national sport of Pakistan?",
    answer: [
      { text: "Cricket", correct: false },
      { text: "Hockey", correct: true },
      { text: "Polo", correct: false },
      { text: "Squash", correct: false },
    ],
  },
  {
    questionId: 6,
    question: "In which year did Pakistan gain independence?",
    answer: [
      { text: "1945", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1960", correct: false },
    ],
  },
  {
    questionId: 7,
    question: "Which of the following cities is not located in Pakistan?",
    answer: [
      { text: "Islamabad", correct: false },
      { text: "Quetta", correct: false },
      { text: "Kabul", correct: true },
      { text: "Rawalpindi", correct: false },
    ],
  },
  {
    questionId: 8,
    question: "Which Pakistani city is known as the City of Gardens?",
    answer: [
      { text: "Karachi", correct: false },
      { text: "Islamabad", correct: false },
      { text: "Lahore", correct: true },
      { text: "Peshawar", correct: false },
    ],
  },
  {
    questionId: 9,
    question: "What is the name of the largest desert in Pakistan?",
    answer: [
      { text: "Sahara Desert", correct: false },
      { text: "Thar Desert", correct: false },
      { text: "Cholistan Desert", correct: true },
      { text: "Arabian Desert", correct: false },
    ],
  },
  {
    questionId: 10,
    question:
      "Which of the following is a famous archaeological site located in Pakistan?",
    answer: [
      { text: "Petra", correct: false },
      { text: "Machu Picchu", correct: false },
      { text: "Mohenjo-Daro", correct: true },
      { text: "Stonehenge", correct: false },
    ],
  },
];

let currentQuesion = 1;
let counter = 0;

let question = document.querySelector("#question");
let answer = document.querySelectorAll(".answer");
let nextBtn = document.querySelector("#next-btn");

function next() {
  counter++;

  startQuiz();
}

function startQuiz() {
  if (counter > quiz.length - 1) {
    document.querySelector(".quiz").innerHTML = `Game Finished 🎉`;
  } else {
    question.innerHTML = quiz[counter].question;
    answer.forEach((item, i) => {
      item.innerHTML = quiz[counter].answer[i].text;
      item.setAttribute("id", quiz[counter].answer[i].correct);
      item.style.backgroundColor = "white";
      item.style.color = "#222";

      item.addEventListener("click", (e) => {
        if (e.target.id == "true") {
          let elem = e.target.parentElement.children;
          Array.from(elem).forEach((item) => {
            item.style.backgroundColor = "white";
            item.style.color = "#222";
          });
          e.target.style.backgroundColor = "green";
          e.target.style.color = "white";
          nextBtn.style.display = "block";
        } else {
          let elem = e.target.parentElement.children;
          Array.from(elem).forEach((item) => {
            item.style.backgroundColor = "white";
            item.style.color = "#222";
          });
          e.target.style.backgroundColor = "red";
          e.target.style.color = "white";
          nextBtn.style.display = "none";
        }
      });
    });
  }
}
nextBtn.addEventListener("click", () => {
  next();
});
