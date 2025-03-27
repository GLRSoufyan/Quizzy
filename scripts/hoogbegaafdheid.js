// Quiz data structure
 const quizData = {
    multipleChoice: [
        {
            question: "Wat is een veelvoorkomend kenmerk van hoogbegaafde mensen?",
            options: [
                "Ze zijn altijd de beste sporters",
                "Ze hebben een hoog IQ en snel leervermogen",
                "Ze zijn altijd creatief in kunst",
                "Ze vermijden contact met anderen"
            ],
            correctKeywords: ["hoog IQ", "snel leervermogen", "hoogbegaafd"],
            explanation: "Hoogbegaafde mensen hebben doorgaans een IQ van 130 of hoger, wat hen in staat stelt om snel nieuwe informatie te verwerken."
        },
        {
            question: "Wat is een IQ-score die vaak wordt gebruikt om hoogbegaafdheid aan te duiden?",
            options: [
                "100",
                "110",
                "130)",
                "150"
            ],
            correctKeywords: [ "130", "hoogbegaafd"],
            explanation: "Een IQ van 130 of hoger wordt vaak gebruikt als indicatie voor hoogbegaafdheid."
        },
        {
            question: "Welke van de volgende kenmerken komt vaak voor bij hoogbegaafde kinderen?",
            options: [
                "Moeite met concentratie",
                "Laag zelfbeeld",
                "Hoge nieuwsgierigheid en veel vragen stellen",
                "Minder interesse in school"
            ],
            correctKeywords: ["nieuwsgierigheid", "veel vragen", "hoogbegaafd"],
            explanation: "Hoogbegaafde kinderen zijn vaak zeer nieuwsgierig, stellen veel vragen en willen diepgaande kennis verwerven."
        },
        {
            question: "Wat kan een uitdaging zijn voor hoogbegaafde leerlingen in het reguliere onderwijs?",
            options: [
                "Ze krijgen te veel uitdaging",
                "Ze hebben vaak moeite met de stof",
                "Ze vervelen zich en krijgen te weinig uitdaging",
                "Ze kunnen niet goed samenwerken met andere leerlingen"
            ],
            correctKeywords: ["vervelen", "te weinig uitdaging", "hoogbegaafde leerlingen"],
            explanation: "Hoogbegaafde leerlingen vervelen zich vaak in het reguliere onderwijs omdat de lesstof te eenvoudig voor ze is."},
        {
            question: "Hoe kan een school het beste inspelen op de behoeften van hoogbegaafde leerlingen?",
            options: [
                "Door hen altijd apart te zetten",
                "Door ze geen extra werk te geven",
                "Door het onderwijs meer te differentiëren en uitdagender te maken",
                "Door hen te behandelen zoals alle andere leerlingen"
            ],
            correctKeywords: ["differentiatie", "uitdagend onderwijs", "hoogbegaafde leerlingen"],
            explanation: "Differentiatie in het onderwijs biedt hoogbegaafde leerlingen meer uitdaging en voorkomt verveling."
        },
        {
            question: "Wat is een typisch sociaal-emotioneel kenmerk van hoogbegaafde kinderen?",
            options: [
                "Ze voelen zich vaak begrepen door hun leeftijdsgenoten",
                "Ze hebben weinig moeite met vriendschappen",
                "Ze kunnen zich vaak eenzaam voelen of niet begrepen",
                "Ze zijn altijd sociaal actief en geliefd"
            ],
            correctKeywords: ["eenzaamheid", "niet begrepen", "sociaal-emotioneel"],
            explanation: "Hoogbegaafde kinderen kunnen zich anders voelen dan hun leeftijdsgenoten, wat kan leiden tot eenzaamheid of het gevoel niet begrepen te worden."
        },
        {
            question: "Waarom kunnen hoogbegaafde mensen moeite hebben met perfectionisme?",
            options: [
                "Omdat ze geen fouten kunnen maken",
                " Omdat ze altijd de beste willen zijn, wat kan leiden tot frustratie",
                "Omdat ze geen kritiek kunnen verdragen",
                "Omdat ze altijd hun creativiteit willen tonen"
            ],
            correctKeywords: ["perfectionisme", "hoge eisen", "frustratie"],
            explanation: "Hoogbegaafde mensen stellen vaak hoge eisen aan zichzelf en willen altijd het beste resultaat behalen, wat kan leiden tot stress of frustratie."
        },
        {
            question: "Wat is een belangrijk aspect van het denken van hoogbegaafde mensen?",
            options: [
                "Ze denken vaak op een heel originele en innovatieve manier",
                " Ze denken altijd op dezelfde manier als anderen",
                "Ze kunnen niet goed logisch redeneren",
                " Ze gebruiken altijd eenvoudige oplossingen"
            ],
            correctKeywords: ["origineel", "innovatief", "denken"],
            explanation: "Hoogbegaafde mensen hebben vaak een originele en innovatieve manier van denken, wat hen helpt om nieuwe oplossingen te bedenken."
        },
        {
            question: "Wat kan een positief effect zijn van hoogbegaafdheid in het onderwijs?",
            options: [
                " Ze hebben altijd snel de antwoorden",
                "Ze kunnen bijdragen aan innovatieve oplossingen en ideeën",
                "Ze leren snel zonder moeite",
                "Ze ontwikkelen geen sociale vaardigheden"
            ],
            correctKeywords: ["innovatieve oplossingen", "bijdragen", "hoogbegaafd"],
            explanation: "Hoogbegaafde leerlingen kunnen waardevolle bijdragen leveren aan het onderwijs door hun innovatieve ideeën en probleemoplossend vermogen.."
        },
        {
            question: "Waarom is het belangrijk dat hoogbegaafde leerlingen extra ondersteuning krijgen?",
            options: [
                "Omdat ze altijd de leiding willen nemen in de klas",
                "Omdat ze sneller vervelen en daardoor niet optimaal kunnen presteren",
                "Omdat ze vaak minder ambitieus zijn",
                "Omdat ze altijd als eerste klaar zijn met hun werk"
            ],
            correctKeywords: ["extra ondersteuning", "vervelen", "potentieel"],
            explanation: " Extra ondersteuning helpt hoogbegaafde leerlingen om zich niet te vervelen en hun potentieel optimaal te benutten."
        }
    ],
    openQuestions: [
        {
            question: "Wat zijn enkele mogelijke uitdagingen voor hoogbegaafde mensen in hun sociale ontwikkeling?",
            correctKeywords: ["onderwijs", "differentiatie", "uitdaging", "hoogbegaafde leerlingen"],
            explanation: "Hoogbegaafde mensen kunnen moeite hebben met het vinden van aansluiting bij leeftijdsgenoten, omdat ze vaak anders denken en zich anders ontwikkelen. Ze kunnen zich eenzaam voelen of het gevoel hebben niet begrepen te worden. Ook kan het zijn dat ze zich minder verbinden met andere kinderen omdat ze op sociaal-emotioneel gebied verder ontwikkeld zijn dan hun leeftijdsgenoten, wat tot frustratie kan leiden."
        },
        {
            question: "Noem twee manieren waarop het onderwijs kan worden aangepast om hoogbegaafde leerlingen beter te ondersteunen.",
            correctKeywords: ["onderwijs", "differentiatie", "uitdaging", "hoogbegaafde leerlingen"],
            explanation: "Differentiatie zorgt ervoor dat hoogbegaafde leerlingen niet vastlopen in te eenvoudige taken, terwijl verrijkingsprogramma’s hen de mogelijkheid bieden om verder te leren en hun talenten te ontwikkelen. Dit voorkomt verveling en stimuleert hun nieuwsgierigheid en creatief denken."
        },
        {
            question: "Waarom wordt hoogbegaafdheid soms als een blessing and a curse beschouwd? Leg dit uit.",
            correctKeywords: ["blessing and curse", "uitdagingen", "voordelen", "perfectionisme", "hoogbegaafde mensen"],
            explanation: "Hoogbegaafde mensen ervaren voordelen zoals snel leren en een grotere creativiteit, maar de nadelen kunnen zijn dat ze zich sociaal geïsoleerd voelen, moeilijk aansluiting vinden bij leeftijdsgenoten, of dat ze onrealistisch hoge eisen aan zichzelf stellen, wat leidt tot stress en emotionele uitputting."
        },
        {
            question: "Wat zou je adviseren aan een docent die merkt dat een leerling hoogbegaafd is maar moeite heeft om zich te integreren in de klas?",
            correctKeywords: ["advies", "hoogbegaafde leerling","moeilijk", "integratie", "onderwijsaanpassing", "sociale interactie"],
            explanation: "Het is belangrijk om een hoogbegaafde leerling de kans te geven om zijn of haar potentieel te benutten, terwijl het ook belangrijk is om te zorgen voor een sociale integratie. Dit kan door specifieke onderwijsstrategieën zoals differentiatie en het stimuleren van sociale interactie met andere kinderen."
        },
        {
            question: "Hoe kunnen ouders hoogbegaafde kinderen het beste ondersteunen in hun persoonlijke ontwikkeling?",
            correctKeywords: ["ouders", "ondersteuning", "persoonlijke ontwikkeling", "hoogbegaafde kinderen", "emotionele ontwikkeling", "helpen"],
            explanation: " Het ondersteunen van hoogbegaafde kinderen gaat niet alleen over het bieden van academische uitdagingen, maar ook over het helpen ontwikkelen van sociale en emotionele vaardigheden. Een goed evenwicht tussen uitdaging en emotionele ondersteuning helpt kinderen zich zowel cognitief als sociaal goed te ontwikkelen."
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
    let summaryHTML = `<p>Bedankt voor het voltooien van de hoogbegaafdheid Quiz!</p>`;
    // Add score category
    const scorePercentage = (score / totalQuestions) * 100;
    let category = '';
    if (scorePercentage >= 90) {
        category = 'Uitstekend! Je hebt diepgaande kennis over hoogbegaafdheid.';
    } else if (scorePercentage >= 75) {
        category = 'Goed gedaan! Je hebt een solide begrip van hoogbegaafdheid.';
    } else if (scorePercentage >= 60) {
        category = 'Niet slecht! Je hebt basiskennis over hoogbegaafdheid.';
    } else if (scorePercentage >= 40) {
        category = 'Je hebt enige kennis over hoogbegaafdheid, maar er is ruimte voor verbetering.';
    } else {
        category = 'Je zou meer kunnen leren over hoogbegaafdheid om je begrip te vergroten.';
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
    
    // Display leaderboard
    displayLeaderboard(); // Ensure leaderboard is displayed after saving
}

// Function to save results to leaderboard
function saveToLeaderboard() {
    // Get existing leaderboard or initialize
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
    // Create leaderboard entry with date (no time)
    const entry = {
        name: currentPlayerName,
        score: score,
        totalQuestions: totalQuestions,
        date: new Date().toLocaleDateString(), // Only store the date without time
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
            <span style="margin-left: 10px;">${entry.score}/${entry.totalQuestions}</span> <!-- Add margin for spacing -->
            <span style="margin-left: 20px;">${entry.date}</span> <!-- Add margin for spacing -->
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
