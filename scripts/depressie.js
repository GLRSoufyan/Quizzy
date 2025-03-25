// Quiz data structure
const quizData = {
    multipleChoice: [
        {
            question: "Wat is een veelvoorkomend symptoom van depressie?",
            options: [
                "Voelen van extreme blijdschap",
                "Gebrek aan energie en vermoeidheid",
                "Verhoogde eetlust",
                "Onverwachte vreugde"
            ],
            correctAnswer: "Gebrek aan energie en vermoeidheid",
            explanation: "Een veelvoorkomend symptoom van depressie is een gebrek aan energie en extreme vermoeidheid."
        },
        {
            question: "Welke van de volgende situaties kan een depressie verergeren?",
            options: [
                "Steun van vrienden",
                "Slechte slaapkwaliteit",
                "Gezonde voeding",
                "Veel beweging"
            ],
            correctAnswer: "Slechte slaapkwaliteit",
            explanation: "Slechte slaapkwaliteit kan bijdragen aan het verergeren van depressieve symptomen."
        },
        {
            question: "Wat kan helpen bij het verminderen van symptomen van depressie?",
            options: [
                "Alleen blijven",
                "Professionele hulp zoeken",
                "Meer tv kijken",
                "Niet praten over je gevoelens"
            ],
            correctAnswer: "Professionele hulp zoeken",
            explanation: "Professionele hulp zoeken is vaak effectief bij het verminderen van symptomen van depressie."
        },
        {
            question: "Wat betekent het als iemand zegt 'ik voel me depressief'?",
            options: [
                "Ze voelen zich tijdelijk verdrietig",
                "Ze hebben een langdurig gevoel van verdriet of leegte",
                "Ze zijn heel blij",
                "Ze hebben veel energie"
            ],
            correctAnswer: "Ze hebben een langdurig gevoel van verdriet of leegte",
            explanation: "Wanneer iemand zegt zich depressief te voelen, verwijst dit vaak naar een langdurig gevoel van verdriet of leegte."
        },
        {
            question: "Wat is geen oorzaak van depressie?",
            options: [
                "Genetische factoren",
                "Stressvolle levensgebeurtenissen",
                "Regelmatige lichaamsbeweging",
                "Chemische onevenwichtigheden in de hersenen"
            ],
            correctAnswer: "Regelmatige lichaamsbeweging",
            explanation: "Regelmatige lichaamsbeweging is eerder een manier om depressie te voorkomen, geen oorzaak van depressie."
        },
        {
            question: "Welke van de volgende behandelingen wordt vaak gebruikt bij depressie?",
            options: [
                "Fysiotherapie",
                "Psychotherapie",
                "Chirurgie",
                "Rust in bed"
            ],
            correctAnswer: "Psychotherapie",
            explanation: "Psychotherapie is een veelgebruikte behandeling voor depressie."
        },
        {
            question: "Wat is een veelvoorkomende lichamelijke klacht bij depressie?",
            options: [
                "Verhoogde hartslag",
                "Hoofdpijn en spierpijn",
                "Toegenomen eetlust",
                "Overmatig zweten"
            ],
            correctAnswer: "Hoofdpijn en spierpijn",
            explanation: "Hoofdpijn en spierpijn zijn veelvoorkomende lichamelijke klachten die mensen met depressie ervaren."
        },
        {
            question: "Welke van de volgende mensen kan een depressie diagnose stellen?",
            options: [
                "Je beste vriend",
                "Een huisarts of psycholoog",
                "Je ouders",
                "Een leraar"
            ],
            correctAnswer: "Een huisarts of psycholoog",
            explanation: "Een huisarts of psycholoog kan een depressie diagnose stellen."
        },
        {
            question: "Welke van de volgende is geen symptoom van depressie?",
            options: [
                "Verlies van interesse in dagelijkse activiteiten",
                "Verhoogde motivatie om nieuwe dingen te proberen",
                "Gevoel van hopeloosheid",
                "Slaapproblemen"
            ],
            correctAnswer: "Verhoogde motivatie om nieuwe dingen te proberen",
            explanation: "Verhoogde motivatie om nieuwe dingen te proberen is geen symptoom van depressie."
        },
        {
            question: "Wat is een risicofactor voor het ontwikkelen van depressie?",
            options: [
                "Het hebben van veel vrienden",
                "Het hebben van een positieve houding",
                "Het ervaren van een groot verlies of trauma",
                "Regelmatig sporten"
            ],
            correctAnswer: "Het ervaren van een groot verlies of trauma",
            explanation: "Het ervaren van groot verlies of trauma is een belangrijke risicofactor voor het ontwikkelen van depressie."
        }
    ],
    openQuestions: [
        {
            question: "Hoe voel je je meestal als je depressief bent?",
            explanation: "Open vraag waarin iemand kan delen hoe zij zich meestal voelen tijdens een depressieve periode."
        },
        {
            question: "Wat zijn volgens jou manieren om iemand te steunen die depressief is?",
            explanation: "Open vraag om te reflecteren op manieren om steun te bieden aan iemand met depressie."
        },
        {
            question: "Kun je een situatie beschrijven waarin je je hopeloos of overweldigd voelde, maar uiteindelijk verbeterde?",
            explanation: "Open vraag voor persoonlijke reflectie over een ervaring met depressie en herstel."
        },
        {
            question: "Waarom denk je dat het belangrijk is om over depressie te praten?",
            explanation: "Open vraag om na te denken over het belang van praten over depressie."
        },
        {
            question: "Hoe zou je iemand aanraden om hulp te zoeken als ze last hebben van depressie?",
            explanation: "Open vraag om suggesties te geven voor het zoeken naar hulp bij depressie."
        }
    ]
};

// Variables to track quiz state
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
const totalQuestions = quizData.multipleChoice.length + quizData.openQuestions.length;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const questionTitle = document.getElementById('questionTitle');
const questionText = document.getElementById('questionText');
const multipleChoiceContainer = document.getElementById('multipleChoiceContainer');
const openQuestionContainer = document.getElementById('openQuestionContainer');
const openAnswer = document.getElementById('openAnswer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreDisplay');
const resultSummary = document.getElementById('resultSummary');

// Initialize Quiz
startButton.addEventListener('click', startQuiz);
prevButton.addEventListener('click', goToPreviousQuestion);
nextButton.addEventListener('click', goToNextQuestion);
submitButton.addEventListener('click', submitQuiz);
restartButton.addEventListener('click', restartQuiz);

// Start the quiz
function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
}

// Load current question
function loadQuestion() {
    // Update question number
    questionTitle.textContent = `Dit is vraag ${currentQuestion + 1}:`;
    
    // Enable/disable navigation buttons
    prevButton.disabled = currentQuestion === 0;
    
    if (currentQuestion === totalQuestions - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
    
    // Determine if current question is multiple choice or open
    const isMultipleChoice = currentQuestion < quizData.multipleChoice.length;
    
    if (isMultipleChoice) {
        // Load multiple choice question
        const questionData = quizData.multipleChoice[currentQuestion];
        questionText.textContent = questionData.question;
        
        // Show multiple choice container, hide open question container
        multipleChoiceContainer.style.display = 'block';
        openQuestionContainer.style.display = 'none';
        
        // Clear previous options
        multipleChoiceContainer.innerHTML = '';
        
        // Add options
        questionData.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            
            // Check if this option was previously selected
            const isSelected = userAnswers[currentQuestion] === index;
            
            optionElement.innerHTML = `
                <div class="answer-text">${option}</div>
                <div class="answer-circle ${isSelected ? 'selected' : ''}"></div>
            `;
            
            // Add click event
            optionElement.addEventListener('click', () => {
                selectOption(index);
            });
            
            multipleChoiceContainer.appendChild(optionElement);
        });
    } else {
        // Load open question
        const openQuestionIndex = currentQuestion - quizData.multipleChoice.length;
        const questionData = quizData.openQuestions[openQuestionIndex];
        questionText.textContent = questionData.question;
        
        // Show open question container, hide multiple choice container
        multipleChoiceContainer.style.display = 'none';
        openQuestionContainer.style.display = 'block';
        
        // Set value of textarea if user previously answered
        openAnswer.value = userAnswers[currentQuestion] || '';
    }
}

// Select an option (for multiple choice questions)
function selectOption(optionIndex) {
    // Store user's answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Update UI to show selected option
    const options = multipleChoiceContainer.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        const circle = option.querySelector('.answer-circle');
        if (index === optionIndex) {
            circle.classList.add('selected');
        } else {
            circle.classList.remove('selected');
        }
    });
}

// Go to next question
function goToNextQuestion() {
    // For open questions, save the answer before moving on
    if (currentQuestion >= quizData.multipleChoice.length) {
        userAnswers[currentQuestion] = openAnswer.value;
    }
    
    // Move to next question if not at the end
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// Go to previous question
function goToPreviousQuestion() {
    // For open questions, save the answer before moving back
    if (currentQuestion >= quizData.multipleChoice.length) {
        userAnswers[currentQuestion] = openAnswer.value;
    }
    
    // Move to previous question if not at the beginning
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    // For open questions, save the answer before submitting
    if (currentQuestion >= quizData.multipleChoice.length) {
        userAnswers[currentQuestion] = openAnswer.value;
    }
    // Calculate score
    calculateScore();
    // Show results screen
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    // Update results display
    scoreDisplay.textContent = `${score}/${totalQuestions}`;
    // Generate and display detailed results
    generateResultsSummary();
}
// Calculate the score based on user answers
function calculateScore() {
    score = 0;
    // Check multiple choice answers
    for (let i = 0; i < quizData.multipleChoice.length; i++) {
        const questionData = quizData.multipleChoice[i];
        const userAnswer = userAnswers[i];
        // If user selected the correct option
        if (userAnswer !== undefined && questionData.options[userAnswer].toLowerCase().includes(questionData.correctKeywords[0].toLowerCase())) {
            score++;
        }
    }
    // Check open question answers
    for (let i = 0; i < quizData.openQuestions.length; i++) {
        const questionIndex = i + quizData.multipleChoice.length;
        const questionData = quizData.openQuestions[i];
        const userAnswer = userAnswers[questionIndex] || '';
        // Check if answer contains correct keywords
        let keywordsFound = 0;
        questionData.correctKeywords.forEach(keyword => {
            if (userAnswer.toLowerCase().includes(keyword.toLowerCase())) {
                keywordsFound++;
            }
        });
        // If the answer contains at least 3 correct keywords, count it as correct
        if (keywordsFound >= 3) {
            score++;
        }
    }
}
// Generate a detailed summary of results
function generateResultsSummary() {
    let summaryHTML = `<p>Bedankt voor het voltooien van de Autisme Quiz!</p>`;
    // Add score category
    const scorePercentage = (score / totalQuestions) * 100;
    let category = '';
    if (scorePercentage >= 90) {
        category = 'Uitstekend! Je hebt diepgaande kennis over autisme.';
    } else if (scorePercentage >= 75) {
        category = 'Goed gedaan! Je hebt een solide begrip van autisme.';
    } else if (scorePercentage >= 60) {
        category = 'Niet slecht! Je hebt basiskennis over autisme.';
    } else if (scorePercentage >= 40) {
        category = 'Je hebt enige kennis over autisme, maar er is ruimte voor verbetering.';
    } else {
        category = 'Je zou meer kunnen leren over autisme om je begrip te vergroten.';
    }
    summaryHTML += `<p><strong>${category}</strong></p>`;
    // Add detailed breakdown of answers
    summaryHTML += `<h3>Antwoorden Overzicht:</h3>`;
    // Multiple choice questions
    summaryHTML += `<h4>Meerkeuzevragen:</h4>`;
    for (let i = 0; i < quizData.multipleChoice.length; i++) {
        const questionData = quizData.multipleChoice[i];
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer !== undefined && questionData.options[userAnswer].toLowerCase().includes(questionData.correctKeywords[0].toLowerCase());
        summaryHTML += `<p><strong>Vraag ${i + 1}:</strong> ${questionData.question}<br>`;
        summaryHTML += `Jouw antwoord: ${userAnswer !== undefined ? questionData.options[userAnswer] : 'Geen antwoord'}<br>`;
        summaryHTML += `<span style="color: ${isCorrect ? 'green' : 'red'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
</span><br>`;
        summaryHTML += `Uitleg: ${questionData.explanation}</p>`;
    }
    // Open questions
    summaryHTML += `<h4>Open Vragen:</h4>`;
    for (let i = 0; i < quizData.openQuestions.length; i++) {
        const questionIndex = i + quizData.multipleChoice.length;
        const questionData = quizData.openQuestions[i];
        const userAnswer = userAnswers[questionIndex] || 'Geen antwoord';
        // Check if answer contains correct keywords
        let keywordsFound = 0;
        const foundKeywords = [];
        questionData.correctKeywords.forEach(keyword => {
            if (userAnswer.toLowerCase().includes(keyword.toLowerCase())) {
                keywordsFound++;
                foundKeywords.push(keyword);
            }
        });
        const isCorrect = keywordsFound >= 3;
        summaryHTML += `<p><strong>Vraag ${questionIndex + 1}:</strong> ${questionData.question}<br>`;
        summaryHTML += `Jouw antwoord: ${userAnswer}<br>`;
        summaryHTML += `<span style="color: ${isCorrect ? 'green' : 'red'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
</span><br>`;
        if (isCorrect) {
            summaryHTML += `Herkende sleutelwoorden: ${foundKeywords.join(', ')}<br>`;
        } else {
            summaryHTML += `Je antwoord bevatte niet genoeg sleutelwoorden. Zoek naar: ${questionData.correctKeywords.slice(0, 5).join(', ')}...<br>`;
        }
        summaryHTML += `Uitleg: ${questionData.explanation}</p>`;
    }
    // Set the innerHTML of the result summary
    resultSummary.innerHTML = summaryHTML;
}
// Restart the quiz
function restartQuiz() {
    // Reset variables
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    // Show start screen
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
}
