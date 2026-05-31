const questions = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "Home Text Markup Language"
    ],
    answer: 0
},
{
    question: "Which language is used for styling web pages?",
    options: [
        "HTML",
        "CSS",
        "Python",
        "Java"
    ],
    answer: 1
},
{
    question: "Which language is used for web interactivity?",
    options: [
        "C++",
        "Java",
        "JavaScript",
        "SQL"
    ],
    answer: 2
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

    let q = questions[currentQuestion];

    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener("click", () => {

            if(index === q.answer) {
                score++;
            }

            Array.from(optionsElement.children).forEach(btn => {
                btn.disabled = true;
            });
        });

        optionsElement.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questions.length) {
        loadQuestion();
    }
    else {
        document.getElementById("quiz").classList.add("hide");
        document.getElementById("result").classList.remove("hide");
        document.getElementById("score").textContent =
            score + " / " + questions.length;
    }
});

loadQuestion();