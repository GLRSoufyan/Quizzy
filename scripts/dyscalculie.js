// Quiz data structure
const quizData = {
    multipleChoice: [
        {
            question: "Wat is dyscalculie?",
            options: [
                "Een rekenstoornis",
                "Een leesstoornis",
                "Een geheugenstoornis",
                "Een taalstoornis"
            ],
            correctKeywords: ["reken", "stoornis"],
            explanation: "Dyscalculie is een rekenstoornis waarbij iemand moeite heeft met het begrijpen en verwerken van getallen en rekenkundige concepten."
        },
        {
            question: "Welke vaardigheid is vaak lastig voor iemand met dyscalculie?",
            options: [
                "Het onthouden van rekenregels",
                "Het lezen van een boek",
                "Het onthouden van namen",
                "Het schrijven van een opstel"
            ],
            correctKeywords: ["onthouden", "rekenregels"],
            explanation: "Mensen met dyscalculie hebben vaak moeite met het onthouden en toepassen van rekenregels, wat een fundamenteel aspect is van rekenvaardigheid."
        },
        {
            question: "Hoeveel procent van de bevolking heeft ongeveer dyscalculie?",
            options: [
                "1-2%",
                "3-6%",
                "10-15%",
                "20-25%"
            ],
            correctKeywords: ["3-6"],
            explanation: "Onderzoek wijst uit dat ongeveer 3-6% van de bevolking dyscalculie heeft, vergelijkbaar met het percentage mensen met dyslexie."
        },
        {
            question: "Welke van de volgende rekenproblemen komt vaak voor bij dyscalculie?",
            options: [
                "Moeite met klokkijken",
                "Problemen met grammatica",
                "Slechte fijne motoriek",
                "Moeilijkheden met rijmen"
            ],
            correctKeywords: ["klokkijken"],
            explanation: "Moeite met klokkijken is een veelvoorkomend probleem bij mensen met dyscalculie, omdat het vereist dat je getallen en tijdseenheden correct interpreteert."
        },
        {
            question: "Wat is een veelvoorkomend kenmerk van dyscalculie?",
            options: [
                "Moeite met het herkennen van getallen en hoeveelheden",
                "Een slecht handschrift",
                "Slecht kunnen onthouden van liedjes",
                "Problemen met het onthouden van gezichten"
            ],
            correctKeywords: ["herkennen", "getallen", "hoeveelheden"],
            explanation: "Een kernsymptoom van dyscalculie is moeite met het herkennen en begrijpen van getallen en hoeveelheden, wat de basis vormt voor verdere rekenvaardigheden."
        },
        {
            question: "Welke aanpak helpt kinderen met dyscalculie bij rekenen?",
            options: [
                "Extra veel huiswerk geven",
                "Visuele hulpmiddelen en praktische oefeningen gebruiken",
                "Geen rekenlessen meer volgen",
                "Alleen werken met een rekenmachine"
            ],
            correctKeywords: ["visuele", "hulpmiddelen", "praktische"],
            explanation: "Visuele hulpmiddelen en praktische oefeningen helpen kinderen met dyscalculie omdat ze abstracte rekenbegrippen concreter maken en verschillende leerstijlen ondersteunen."
        },
        {
            question: "Wat is een bekend hulpmiddel voor mensen met dyscalculie?",
            options: [
                "Een rekenmachine",
                "Een gehoorapparaat",
                "Een bril",
                "Een vergrootglas"
            ],
            correctKeywords: ["rekenmachine"],
            explanation: "Een rekenmachine is een belangrijk hulpmiddel voor mensen met dyscalculie, omdat het hen helpt bij berekeningen terwijl ze zich kunnen concentreren op het begrijpen van wiskundige concepten."
        },
        {
            question: "Welk schoolvak is voor iemand met dyscalculie vaak extra moeilijk?",
            options: [
                "Geschiedenis",
                "Rekenen/wiskunde",
                "Aardrijkskunde",
                "Muziek"
            ],
            correctKeywords: ["rekenen", "wiskunde"],
            explanation: "Rekenen/wiskunde is vaak het moeilijkste vak voor mensen met dyscalculie, omdat dit vak direct een beroep doet op de vaardigheden waar zij moeite mee hebben."
        },
        {
            question: "Hoe wordt dyscalculie vastgesteld?",
            options: [
                "Door een IQ-test",
                "Door een speciale rekenstoornistest",
                "Door een taaltest",
                "Door een bloedonderzoek"
            ],
            correctKeywords: ["rekenstoornis", "test"],
            explanation: "Dyscalculie wordt vastgesteld door middel van speciale rekentoetsen die specifiek ontworpen zijn om rekenproblemen te identificeren, in combinatie met andere diagnostische instrumenten."
        },
        {
            question: "Kan iemand met dyscalculie goed zijn in andere vakken?",
            options: [
                "Ja, dyscalculie heeft alleen invloed op rekenen",
                "Nee, dyscalculie beïnvloedt alle schoolvakken",
                "Alleen als ze extra oefenen",
                "Alleen als ze geen rekenmachine gebruiken"
            ],
            correctKeywords: ["ja", "alleen", "rekenen"],
            explanation: "Ja, dyscalculie heeft specifiek invloed op rekenvaardigheden, maar beïnvloedt niet noodzakelijk andere cognitieve vaardigheden. Mensen met dyscalculie kunnen uitblinken in talen, kunst, geschiedenis en veel andere gebieden."
        }
    ],
    openQuestions: [
        {
            question: "Wat is het verschil tussen dyscalculie en moeite hebben met rekenen?",
            correctKeywords: ["leerstoornis", "stoornis", "blijvend", "persistent", "oefening", "uitleg", "hersenen", "neurologisch", "aangeboren", "genetisch"],
            explanation: "Dyscalculie is een leerstoornis, terwijl moeite hebben met rekenen kan komen door onvoldoende oefening of uitleg. Bij dyscalculie is er sprake van een neurologische basis die blijvende rekenproblemen veroorzaakt, ongeacht de hoeveelheid oefening of onderwijs."
        },
        {
            question: "Noem twee manieren waarop scholen leerlingen met dyscalculie kunnen ondersteunen.",
            correctKeywords: ["extra", "uitleg", "visueel", "hulpmiddel", "tijd", "toets", "rekenmachine", "aanpassing", "ondersteuning", "maatwerk", "structuur", "stappenplan"],
            explanation: "Scholen kunnen leerlingen met dyscalculie ondersteunen door extra uitleg met visuele hulpmiddelen te bieden en meer tijd te geven bij rekentoetsen of gebruik van een rekenmachine toe te staan. Ook andere aanpassingen zoals stappenplannen en gestructureerde instructies kunnen helpen."
        },
        {
            question: "Hoe kan dyscalculie invloed hebben op het dagelijks leven van iemand?",
            correctKeywords: ["geld", "tellen", "klokkijken", "tijd", "schatten", "afstand", "plannen", "route", "boodschappen", "pincode", "prijzen", "budget"],
            explanation: "Dyscalculie kan het dagelijks leven beïnvloeden doordat het lastig kan zijn om geld te tellen, klokkijken, en schattingen te maken van tijdsduur of afstand. Dit kan impact hebben op boodschappen doen, reizen plannen, financiën beheren en veel alledaagse activiteiten waarbij getallen een rol spelen."
        },
        {
            question: "Wat zijn twee signalen die kunnen wijzen op dyscalculie bij een jong kind?",
            correctKeywords: ["onthouden", "sommen", "begrijpen", "getallen", "hoeveelheden", "tellen", "verwisselen", "cijfers", "moeite", "vergelijken"],
            explanation: "Signalen die kunnen wijzen op dyscalculie bij jonge kinderen zijn onder andere moeite met het onthouden van eenvoudige sommen en problemen met het begrijpen van getallen en hoeveelheden. Andere signalen kunnen zijn: moeite met tellen in de juiste volgorde, cijfers verwisselen, en problemen met het vergelijken van hoeveelheden."
        },
        {
            question: "Ken jij iemand met dyscalculie? Hoe helpt die persoon zichzelf bij rekenen?",
            correctKeywords: ["rekenmachine", "hulpmiddel", "visueel", "trucjes", "vingers", "tellen", "ezelsbruggetjes", "stappenplan", "strategie", "app"],
            explanation: "Dit antwoord is persoonlijk, maar veel mensen met dyscalculie helpen zichzelf door gebruik te maken van een rekenmachine, visuele hulpmiddelen, of trucjes zoals vingers tellen. Andere strategieën kunnen zijn: ezelsbruggetjes gebruiken, stappenplannen volgen, of speciale apps inzetten die rekenen ondersteunen."
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
    let summaryHTML = `<p>Bedankt voor het voltooien van de Dyscalculie Quiz!</p>`;
    // Add score category
    const scorePercentage = (score / totalQuestions) * 100;
    let category = '';
    if (scorePercentage >= 90) {
        category = 'Uitstekend! Je hebt diepgaande kennis over dyscalculie.';
    } else if (scorePercentage >= 75) {
        category = 'Goed gedaan! Je hebt een solide begrip van dyscalculie.';
    } else if (scorePercentage >= 60) {
        category = 'Niet slecht! Je hebt basiskennis over dyscalculie.';
    } else if (scorePercentage >= 40) {
        category = 'Je hebt enige kennis over dyscalculie, maar er is ruimte voor verbetering.';
    } else {
        category = 'Je zou meer kunnen leren over dyscalculie om je begrip te vergroten.';
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