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
            correctKeywords: "Gebrek aan energie en vermoeidheid",
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
            correctKeywords: "Slechte slaapkwaliteit",
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
            correctKeywords: "Professionele hulp zoeken",
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
            correctKeywords: "Ze hebben een langdurig gevoel van verdriet of leegte",
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
            correctKeywords: "Regelmatige lichaamsbeweging",
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
            correctKeywords: "Psychotherapie",
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
            correctKeywords: "Hoofdpijn en spierpijn",
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
            correctKeywords: "Een huisarts of psycholoog",
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
            correctKeywords: "Verhoogde motivatie om nieuwe dingen te proberen",
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
            correctKeywords: "Het ervaren van een groot verlies of trauma",
            explanation: "Het ervaren van groot verlies of trauma is een belangrijke risicofactor voor het ontwikkelen van depressie."
        }
    ],
    openQuestions: [
        {
            question: "Hoe voel je je meestal als je depressief bent?",
            correctKeywords: ["verdrietig", "leeg", "uitgeput", "motivatieloos"],
            explanation: "Open vraag waarin iemand kan delen hoe zij zich meestal voelen tijdens een depressieve periode."
        },
        {
            question: "Wat zijn volgens jou manieren om iemand te steunen die depressief is?",
            correctKeywords: ["luisteren", "begrip", "steun", "professionele hulp", "geduld"],
            explanation: "Open vraag om te reflecteren op manieren om steun te bieden aan iemand met depressie."
        },
        {
            question: "Kun je een situatie beschrijven waarin je je hopeloos of overweldigd voelde, maar uiteindelijk verbeterde?",
            correctKeywords: ["overwinnen", "hoop", "verandering", "groei", "steun"],
            explanation: "Open vraag voor persoonlijke reflectie over een ervaring met depressie en herstel."
        },
        {
            question: "Waarom denk je dat het belangrijk is om over depressie te praten?",
            correctKeywords: ["bewustzijn", "stigma", "erkenning", "hulp", "begrip"],
            explanation: "Open vraag om na te denken over het belang van praten over depressie."
        },
        {
            question: "Hoe zou je iemand aanraden om hulp te zoeken als ze last hebben van depressie?",
            correctKeywords: ["professioneel", "arts", "psycholoog", "vertrouwen", "steun"],
            explanation: "Open vraag om suggesties te geven voor het zoeken naar hulp bij depressie."
        }
    ]
};


let currentQuestion = 0;
let score = 0;
let userAnswers = [];
const totalQuestions = quizData.multipleChoice.length + quizData.openQuestions.length;


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


startButton.addEventListener('click', startQuiz);
prevButton.addEventListener('click', goToPreviousQuestion);
nextButton.addEventListener('click', goToNextQuestion);
submitButton.addEventListener('click', submitQuiz);
restartButton.addEventListener('click', restartQuiz);


function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
}


function loadQuestion() {
  
    questionTitle.textContent = `Dit is vraag ${currentQuestion + 1}:`;
    
   
    prevButton.disabled = currentQuestion === 0;
    
    if (currentQuestion === totalQuestions - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
    
   
    const isMultipleChoice = currentQuestion < quizData.multipleChoice.length;
    
    if (isMultipleChoice) {
       
        const questionData = quizData.multipleChoice[currentQuestion];
        questionText.textContent = questionData.question;
        
    
        multipleChoiceContainer.style.display = 'block';
        openQuestionContainer.style.display = 'none';
        
      
        multipleChoiceContainer.innerHTML = '';
        
    
        questionData.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            
           
            const isSelected = userAnswers[currentQuestion] === index;
            
            optionElement.innerHTML = `
                <div class="answer-text">${option}</div>
                <div class="answer-circle ${isSelected ? 'selected' : ''}"></div>
            `;
            
           
            optionElement.addEventListener('click', () => {
                selectOption(index);
            });
            
            multipleChoiceContainer.appendChild(optionElement);
        });
    } else {
       
        const openQuestionIndex = currentQuestion - quizData.multipleChoice.length;
        const questionData = quizData.openQuestions[openQuestionIndex];
        questionText.textContent = questionData.question;
        
       
        multipleChoiceContainer.style.display = 'none';
        openQuestionContainer.style.display = 'block';
        
       
        openAnswer.value = userAnswers[currentQuestion] || '';
    }
}


function selectOption(optionIndex) {
    
    userAnswers[currentQuestion] = optionIndex;
    
  
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


function goToNextQuestion() {
    
    if (currentQuestion >= quizData.multipleChoice.length) {
        userAnswers[currentQuestion] = openAnswer.value;
    }
    
   
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        loadQuestion();
    }
}


function goToPreviousQuestion() {
   
    if (currentQuestion >= quizData.multipleChoice.length) {
        userAnswers[currentQuestion] = openAnswer.value;
    }
    
   
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}


function submitQuiz() {
   
    if (currentQuestion >= quizData.multipleChoice.length) {
        userAnswers[currentQuestion] = openAnswer.value;
    }
 
    calculateScore();
   
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
   
    scoreDisplay.textContent = `${score}/${totalQuestions}`;
    
    generateResultsSummary();
}


function calculateScore() {
    score = 0;
  
    for (let i = 0; i < quizData.multipleChoice.length; i++) {
        const questionData = quizData.multipleChoice[i];
        const userAnswer = userAnswers[i];
       
        if (userAnswer !== undefined && questionData.options[userAnswer].toLowerCase().includes(questionData.correctKeywords.toLowerCase())) {
            score++;
        }
    }
    
    
    for (let i = 0; i < quizData.openQuestions.length; i++) {
        const questionIndex = i + quizData.multipleChoice.length;
        const questionData = quizData.openQuestions[i];
        const userAnswer = userAnswers[questionIndex] || '';
        
       
        let keywordsFound = 0;
        questionData.correctKeywords.forEach(keyword => {
            if (userAnswer.toLowerCase().includes(keyword.toLowerCase())) {
                keywordsFound++;
            }
        });
        
       
        if (keywordsFound >= 2) {
            score++;
        }
    }
}

function generateResultsSummary() {
    let summaryHTML = `<p>Bedankt voor het voltooien van de Depressie Quiz!</p>`;
    
  
    const scorePercentage = (score / totalQuestions) * 100;
    let category = '';
    if (scorePercentage >= 90) {
        category = 'Uitstekend! Je hebt diepgaande kennis over depressie.';
    } else if (scorePercentage >= 75) {
        category = 'Goed gedaan! Je hebt een solide begrip van depressie.';
    } else if (scorePercentage >= 60) {
        category = 'Niet slecht! Je hebt basiskennis over depressie.';
    } else if (scorePercentage >= 40) {
        category = 'Je hebt enige kennis over depressie, maar er is ruimte voor verbetering.';
    } else {
        category = 'Je zou meer kunnen leren over depressie om je begrip te vergroten.';
    }
    summaryHTML += `<p><strong>${category}</strong></p>`;
    
 
    summaryHTML += `<h3>Antwoorden Overzicht:</h3>`;
    
    
    summaryHTML += `<h4>Meerkeuzevragen:</h4>`;
    for (let i = 0; i < quizData.multipleChoice.length; i++) {
        const questionData = quizData.multipleChoice[i];
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer !== undefined && questionData.options[userAnswer].toLowerCase().includes(questionData.correctKeywords.toLowerCase());
        
        summaryHTML += `<p><strong>Vraag ${i + 1}:</strong> ${questionData.question}<br>`;
        summaryHTML += `Jouw antwoord: ${userAnswer !== undefined ? questionData.options[userAnswer] : 'Geen antwoord'}<br>`;
        summaryHTML += `<span style="color: ${isCorrect ? 'green' : 'red'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
</span><br>`;
        summaryHTML += `Uitleg: ${questionData.explanation}</p>`;
    }
    
   
    summaryHTML += `<h4>Open Vragen:</h4>`;
    for (let i = 0; i < quizData.openQuestions.length; i++) {
        const questionIndex = i + quizData.multipleChoice.length;
        const questionData = quizData.openQuestions[i];
        const userAnswer = userAnswers[questionIndex] || 'Geen antwoord';
        
       
        let keywordsFound = 0;
        const foundKeywords = [];
        questionData.correctKeywords.forEach(keyword => {
            if (userAnswer.toLowerCase().includes(keyword.toLowerCase())) {
                keywordsFound++;
                foundKeywords.push(keyword);
            }
        });
        
        const isCorrect = keywordsFound >= 2;
        
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
    
   
    resultSummary.innerHTML = summaryHTML;
}


function restartQuiz() {
   
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
  
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
}

let currentPlayerName = '';
const leaderboardModal = document.getElementById('leaderboardSection');
const leaderboardList = document.getElementById('leaderboardList');
const loginModal = document.getElementById('loginModal');
const nameInput = document.getElementById('nameInput');
const startLoginButton = document.getElementById('startLoginButton');

startLoginButton.addEventListener('click', startQuizWithLogin);

function startQuizWithLogin() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Voer alstublieft een naam in');
        return;
    }
    
    currentPlayerName = name;
    
    loginModal.style.display = 'none';
    
    startQuiz();
}

function submitQuiz() {
    calculateScore();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    scoreDisplay.textContent = `${score}/${totalQuestions}`;
    generateResultsSummary();
    
    saveToLeaderboard();
    
    displayLeaderboard(); 
}

function saveToLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
    const entry = {
        name: currentPlayerName,
        score: score,
        totalQuestions: totalQuestions,
        date: new Date().toLocaleDateString(), 
    };
    
    leaderboard.push(entry);
    
    leaderboard.sort((a, b) => b.score - a.score);
    
    const topLeaderboard = leaderboard.slice(0, 10);
    
    localStorage.setItem('autismeQuizLeaderboard', JSON.stringify(topLeaderboard));
    
    displayLeaderboard();
}

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
    leaderboardList.innerHTML = '';
    
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
    
   
    leaderboardModal.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    loginModal.style.display = 'flex';
    
    resultScreen.style.display = 'none';
    leaderboardModal.style.display = 'none';
}
