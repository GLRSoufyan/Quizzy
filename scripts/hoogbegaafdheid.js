const quizData = {
    multipleChoice: [
        {
            question: "Wat is een kenmerk van hoogbegaafdheid?",
            options: [
                "Een gemiddeld IQ",
                "Een hoog IQ en snelle informatieverwerking",
                "Lage motivatie voor leren",
                "Moeite met sociale interacties"
            ],
            correctKeywords: "Een hoog IQ en snelle informatieverwerking",
            explanation: "Hoogbegaafde mensen hebben vaak een hoger IQ dan gemiddeld en kunnen informatie sneller verwerken dan anderen."
        },
        {
            question: "Hoe wordt hoogbegaafdheid meestal gemeten?",
            options: [
                "Door middel van een IQ-test",
                "Door academische prestaties",
                "Door sociale vaardigheden",
                "Door sportieve prestaties"
            ],
            correctKeywords: "Door middel van een IQ-test",
            explanation: "Hoogbegaafdheid wordt vaak gemeten met een IQ-test waarbij een score van 130 of hoger wordt beschouwd als een indicatie van hoogbegaafdheid."
        },
        {
            question: "Wat is een veelvoorkomend sociaal kenmerk van hoogbegaafde kinderen?",
            options: [
                "Ze zijn altijd goed in sociale interacties",
                "Ze kunnen zich moeilijk aanpassen aan leeftijdsgenoten",
                "Ze hebben geen interesse in andere kinderen",
                "Ze houden van fysieke activiteiten"
            ],
            correctKeywords: "Ze kunnen zich moeilijk aanpassen aan leeftijdsgenoten",
            explanation: "Hoogbegaafde kinderen kunnen zich soms moeilijk aanpassen aan leeftijdsgenoten omdat ze andere interesses of vaardigheden hebben die hen onderscheiden."
        },
        {
            question: "Welke van de volgende uitspraken is waar over hoogbegaafde volwassenen?",
            options: [
                "Ze zijn altijd academisch succesvol",
                "Ze hebben vaak moeite om zich in te voegen in de samenleving",
                "Ze hebben weinig sociale contacten",
                "Ze ervaren geen stress"
            ],
            correctKeywords: "Ze hebben vaak moeite om zich in te voegen in de samenleving",
            explanation: "Hoogbegaafde volwassenen kunnen zich soms moeilijk aanpassen aan de samenleving omdat ze anders denken en werken dan de meeste mensen."
        },
        {
            question: "Wat is een uitdaging voor hoogbegaafde kinderen in het onderwijs?",
            options: [
                "Ze hebben moeite met concentratie",
                "Ze vinden het leren vaak te gemakkelijk en worden niet voldoende uitgedaagd",
                "Ze houden niet van school",
                "Ze hebben geen interesse in leren"
            ],
            correctKeywords: "Ze vinden het leren vaak te gemakkelijk en worden niet voldoende uitgedaagd",
            explanation: "Hoogbegaafde kinderen kunnen zich vervelen in een standaard onderwijssysteem, omdat het lesmateriaal vaak niet uitdagend genoeg is voor hen."
        },
        {
            question: "Wat kan helpen bij het ondersteunen van hoogbegaafde kinderen?",
            options: [
                "Een uitdagend en stimulerend lesprogramma",
                "Ze altijd op hun eigen tempo laten werken zonder begeleiding",
                "Ze alleen maar met andere hoogbegaafde kinderen laten werken",
                "Ze aanmoedigen om hun vaardigheden te verbergen"
            ],
            correctKeywords: "Een uitdagend en stimulerend lesprogramma",
            explanation: "Hoogbegaafde kinderen kunnen het beste ondersteund worden met een lesprogramma dat hen uitdaagt en hen in staat stelt hun potentieel te benutten."
        },
        {
            question: "Wat is een van de mogelijke nadelen van hoogbegaafdheid?",
            options: [
                "Moeite met complexe taken",
                "Een verhoogde kans op psychische problemen zoals depressie en angst",
                "Onvermogen om succes te behalen",
                "Een gebrek aan interesse in leren"
            ],
            correctKeywords: "Een verhoogde kans op psychische problemen zoals depressie en angst",
            explanation: "Hoogbegaafde mensen kunnen, door het niet goed begrepen worden of door sociale isolatie, een verhoogd risico lopen op psychische problemen."
        },
        {
            question: "Wat is de term die wordt gebruikt om de combinatie van zowel intellectuele als creatieve capaciteiten bij hoogbegaafde mensen te beschrijven?",
            options: [
                "Intelligentie",
                "Creativiteit",
                "Dubbele uitzonderlijkheid",
                "Normale ontwikkeling"
            ],
            correctKeywords: "Dubbele uitzonderlijkheid",
            explanation: "Dubbele uitzonderlijkheid verwijst naar hoogbegaafde mensen die naast hun intellectuele capaciteiten ook creatieve of andere bijzondere talenten hebben."
        },
        {
            question: "Welke van de volgende is een misverstand over hoogbegaafdheid?",
            options: [
                "Hoogbegaafde kinderen hebben geen hulp nodig",
                "Hoogbegaafde kinderen kunnen moeite hebben met sociale interacties",
                "Hoogbegaafde kinderen zijn altijd academisch succesvol",
                "Hoogbegaafde kinderen hebben altijd veel vrienden"
            ],
            correctKeywords: "Hoogbegaafde kinderen kunnen moeite hebben met sociale interacties",
            explanation: "Hoogbegaafde kinderen kunnen vaak moeite hebben om zich sociaal aan te passen aan leeftijdsgenoten, omdat ze anders denken en vaak andere interesses hebben."
        },
        {
            question: "Welke van de volgende is een typische eigenschap van hoogbegaafde volwassenen?",
            options: [
                "Ze hebben vaak een grote nieuwsgierigheid en willen altijd meer leren",
                "Ze vinden sociale interacties altijd gemakkelijk",
                "Ze vermijden uitdagingen",
                "Ze willen geen verantwoordelijkheid nemen"
            ],
            correctKeywords: "Ze hebben vaak een grote nieuwsgierigheid en willen altijd meer leren",
            explanation: "Hoogbegaafde volwassenen zijn vaak zeer nieuwsgierig, willen altijd meer leren en zijn vaak op zoek naar intellectuele stimulatie."
        }
    ],
    openQuestions: [
        {
            question: "Hoe zou je hoogbegaafdheid uitleggen aan iemand die er niets van weet?",
            correctKeywords: ["reflecteren", "en", "als", "IQ", "neurodivergentie", "mentaal", "mentale"],
            explanation: "Open vraag om te reflecteren op een eenvoudige uitleg van hoogbegaafdheid."
        },
        {
            question: "Wat denk je dat de belangrijkste uitdaging is voor hoogbegaafde kinderen in het onderwijs?",
            correctKeywords: [" "],
            explanation: "Open vraag om na te denken over de specifieke uitdagingen die hoogbegaafde kinderen kunnen ervaren in het onderwijssysteem."
        },
        {
            question: "Kun je een voorbeeld geven van een hoogbegaafde persoon die een succesvolle carrière heeft gehad?",
            correctKeywords: [" "],
            explanation: "Open vraag om te reflecteren op succesvolle hoogbegaafde mensen en hoe zij hun talenten hebben benut."
        },
        {
            question: "Waarom denk je dat sommige hoogbegaafde mensen zich sociaal geïsoleerd voelen?",
            correctKeywords: ["sociaal", "moeite", "EQ", "IQ"],
            explanation: "Open vraag om na te denken over de sociale uitdagingen van hoogbegaafde mensen."
        },
        {
            question: "Welke strategieën zou je aanraden voor het ondersteunen van een hoogbegaafd kind?",
            correctKeywords: [" "],
            explanation: "Open vraag om suggesties te geven voor het ondersteunen van hoogbegaafde kinderen."
        },
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
// Existing quiz code remains the same

// New variables for login and leaderboard
let currentPlayerName = '';
const leaderboardModal = document.getElementById('leaderboardSection');
const leaderboardList = document.getElementById('leaderboardList');
const loginModal = document.getElementById('loginModal');
const nameInput = document.getElementById('nameInput');
const startLoginButton = document.getElementById('startLoginButton');

// Login event listener
startLoginButton.addEventListener('click', startQuizWithLogin);

// Function to start quiz with login
function startQuizWithLogin() {
    const name = nameInput.value.trim();
    
    // Validate name input
    if (name === '') {
        alert('Voer alstublieft een naam in');
        return;
    }
    
    // Store current player name
    currentPlayerName = name;
    
    // Hide login modal
    loginModal.style.display = 'none';
    
    // Start the quiz
    startQuiz();
}

// Modify submitQuiz function to save results
function submitQuiz() {
    // Existing submitQuiz logic
    calculateScore();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    scoreDisplay.textContent = `${score}/${totalQuestions}`;
    generateResultsSummary();
    
    // Save to leaderboard
    saveToLeaderboard();
}

// Function to save results to leaderboard
function saveToLeaderboard() {
    // Get existing leaderboard or initialize
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
    // Create leaderboard entry
    const entry = {
        name: currentPlayerName,
        score: score,
        totalQuestions: totalQuestions,
    };
    
    // Add entry to leaderboard
    leaderboard.push(entry);
    
    // Sort leaderboard by score (descending)
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Keep top 10 entries
    const topLeaderboard = leaderboard.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('autismeQuizLeaderboard', JSON.stringify(topLeaderboard));
    
    // Display leaderboard
    displayLeaderboard();
}

// Function to display leaderboard
function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
    // Clear existing leaderboard
    leaderboardList.innerHTML = '';
    
    // Populate leaderboard
    leaderboard.forEach((entry, index) => {
        const leaderboardItem = document.createElement('div');
        leaderboardItem.className = 'leaderboard-item';
        leaderboardItem.innerHTML = `
            <span>${index + 1}. ${entry.name}</span>
            <span>${entry.score}/${entry.totalQuestions})</span>
        `;
        leaderboardList.appendChild(leaderboardItem);
    });
    
    // Show leaderboard section
    leaderboardModal.style.display = 'block';
}

// Modify restartQuiz to reset login state
function restartQuiz() {
    // Reset variables
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    // Show login modal again
    loginModal.style.display = 'flex';
    
    // Hide result and leaderboard screens
    resultScreen.style.display = 'none';
    leaderboardModal.style.display = 'none';
}