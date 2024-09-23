const quizData = [
    {
        question: "1) Qual é o símbolo que é utilizado para simbolizar um fatorial?",
        options: ["Exclamação(!)", "Interrogação(?)", "Pareênteses()", "Chaves{}"],
        correctAnswer: "Exclamação(!)" 
    },
    {
        question: "2) Em qual tipo de combinatória a ordem dos elementos não é relevante?",
        options: ["Arranjo Simples", "Combinação", "Permutação Sem Repetição", "Permutação Com Repetição"],
        correctAnswer: "Combinação"
    },
    {
        question: "3) Quantas senhas com 4 algarismos diferentes podemos escrever com algarismos de 0 à 9?",
        options: ["3024", "5040", "4224", "6144"],
        correctAnswer: "5040"
    },
    {
        question: "4) Quantos anagramas possíveis podemos fazer com a palavra BRASIL?",
        options: ["800", "650", "720", "770"],
        correctAnswer: "720"
    },
    {
        question: "5) Em um baralho de 52 cartas, quantas mãos de 5 cartas podem ser puxadas?",
        options: ["2.598.960", "2.420.690", "3.098.900", "3.298.690"],
        correctAnswer: "2.598.960"
    },
    {
        question: "6) Em uma sorveteria, temos 5 sabores diferentes que podem ser escolhidos, para montar um sundae você pode escolher 3 sabores, podendo repetir, quantas combinações diferentes de sundae você pode fazer?",
        options: ["21", "30", "35", "37"],
        correctAnswer: "35"
    },
    {
        question: "7) Quantas diferentes combinações de 2 letras e 3 números podem ser formadas a partir do alfabeto (26 letras) e dos dígitos (0 à 9), onde as letras e números podem se repetir?",
        options: ["686", "667", "676", "652"],
        correctAnswer: "676"
    },
    {
        question: "8) Se você tiver 10 livros diferentes e quiser escolher 4 para levar de viagem, de quantas maneiras diferentes você pode fazer essa escolha?",
        options: ["160", "180", "240", "210"],
        correctAnswer: "210"
    },
    {
        question: "9) De quantas maneiras diferentes podemos organizar 5 livros em uma estante?",
        options: ["130", "145", "120", "150"],
        correctAnswer: "120"
    },
    {
        question: "10) Em um grupo de 20 pessoas, quantas maneiras diferentes podemos formar um comitê de 3 pessoas?",
        options: ["1240", "1140", "1430", "1420"],
        correctAnswer: "1140"
    }
];
let currentQuestionIndex = 0;
let score = 0;
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    let optionsHtml = "";
    question.options.forEach(option => {
        optionsHtml += `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}
function checkAnswer(selectedAnswer) {
    const question = quizData[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
        score++;
        document.getElementById("feedback").textContent = "Correto!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "Incorreto.";
        document.getElementById("feedback").style.color = "red";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}
function endQuiz() {
    document.getElementById("options").innerHTML = "";
    document.getElementById("question").textContent = `Fim do Quiz!`;
    document.getElementById("feedback").textContent = `Parabéns! Você terminou o quiz, você acertou ${score} questões de ${quizData.length}`;
    document.getElementById("feedback").style.color = "";
    if (score < quizData.length) {
        if (score === 0) {
            document.getElementById("feedback").textContent = `Você terminou o quiz, você acertou ${score} questões de ${quizData.length}... tem que estudar um pouquinho mais...`
            document.getElementById("img2").style.display = "block";
        } else {
            document.getElementById("feedback").textContent = `Parabéns! Você terminou o quiz, você acertou ${score} questões de ${quizData.length}`
            document.getElementById("gif-container").style.display = "block";
        }
    } else {
        document.getElementById("feedback").textContent = `Parabéns! Você terminou o quiz, você acertou ${score} questões de ${quizData.length}!`
        document.getElementById("img").style.display = "block";
    }
    }
// Start the quiz when the addon is loaded
displayQuestion();