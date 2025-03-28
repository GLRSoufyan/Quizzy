 
 const quizData = {
    multipleChoice: [
        {
            question: "Wat is autisme?",
            options: [
                "Een tijdelijke aandoening die verdwijnt na de puberteit",
                "Een neurologische ontwikkelingsstoornis die invloed heeft op communicatie en sociaal gedrag",
                "Een psychische aandoening die alleen bij volwassenen voorkomt",
                "Een leerstoornis die alleen invloed heeft op schoolprestaties"
            ],
            correctKeywords: ["neurologisch", "ontwikkelingsstoornis", "communicatie", "sociaal"],
            explanation: "Autisme is een neurologische ontwikkelingsstoornis die invloed heeft op hoe mensen communiceren en omgaan met anderen en hun omgeving."
        },
        {
            question: "Welke term wordt gebruikt om te verwijzen naar het spectrum van autistische aandoeningen?",
            options: [
                "Autisme Spectrum Stoornis (ASS)",
                "Pervasieve Ontwikkelingsstoornis (POS)",
                "Algemene Sociale Stoornis (ASS)",
                "Neurologische Communicatiestoornis (NCS)"
            ],
            correctKeywords: ["autisme spectrum stoornis", "ass", "spectrum"],
            explanation: "Autisme Spectrum Stoornis (ASS) is de officiële term die gebruikt wordt om te verwijzen naar verschillende condities die voorheen afzonderlijk werden gediagnosticeerd."
        },
        {
            question: "Op welke leeftijd kunnen de eerste tekenen van autisme meestal worden opgemerkt?",
            options: [
                "Tussen 12 en 18 jaar",
                "Tussen 6 en 12 jaar",
                "Tussen 2 en 3 jaar",
                "Alleen bij volwassenen"
            ],
            correctKeywords: ["2", "3", "vroeg", "jong", "peuter"],
            explanation: "De eerste tekenen van autisme kunnen meestal worden opgemerkt tussen de leeftijd van 2 en 3 jaar, hoewel sommige kinderen eerder of later symptomen kunnen vertonen."
        },
        {
            question: "Welke van de volgende is GEEN kenmerkend symptoom van autisme?",
            options: [
                "Beperkte of repetitieve gedragspatronen",
                "Moeite met sociale interactie en communicatie",
                "Verhoogde intelligentie en creativiteit bij alle mensen met autisme",
                "Overgevoeligheid of ondergevoeligheid voor zintuiglijke prikkels"
            ],
            correctKeywords: ["verhoogd", "intelligentie", "creativiteit", "alle"],
            explanation: "Niet alle mensen met autisme hebben een verhoogde intelligentie of creativiteit. Autisme beïnvloedt mensen op verschillende manieren en het spectrum is zeer divers."
        },
        {
            question: "Wat wordt bedoeld met 'speciale interesses' bij mensen met autisme?",
            options: [
                "Interesses die alleen door mensen met autisme worden gedeeld",
                "Intense focus op specifieke onderwerpen of activiteiten",
                "Therapieën die speciaal ontworpen zijn voor mensen met autisme",
                "Interesses die door artsen worden voorgeschreven"
            ],
            correctKeywords: ["intense", "focus", "specifiek"],
            explanation: "Speciale interesses bij mensen met autisme verwijzen naar een intense focus of fascinatie voor specifieke onderwerpen of activiteiten, waarbij ze vaak gedetailleerde kennis ontwikkelen."
        },
        {
            question: "Wat is stimming?",
            options: [
                "Een medicijn gebruikt voor de behandeling van autisme",
                "Een therapeutische methode om communicatie te verbeteren",
                "Repetitieve gedragingen of bewegingen die zelfregulering ondersteunen",
                "Een test om autisme te diagnosticeren"
            ],
            correctKeywords: ["repetitief", "gedrag", "beweging", "zelfregulering"],
            explanation: "Stimming verwijst naar repetitieve gedragingen of bewegingen die mensen met autisme kunnen helpen bij het reguleren van emoties, het omgaan met overweldigende situaties of het uiten van gevoelens."
        },
        {
            question: "Welke uitspraak over autisme is WAAR?",
            options: [
                "Autisme komt alleen voor bij kinderen en verdwijnt meestal in de volwassenheid",
                "Autisme wordt voornamelijk veroorzaakt door vaccinaties",
                "Autisme komt vaker voor bij jongens dan bij meisjes",
                "Alle mensen met autisme hebben een verstandelijke beperking"
            ],
            correctKeywords: ["jongens", "meer", "vaker", "meisjes"],
            explanation: "Onderzoek toont aan dat autisme vaker wordt gediagnosticeerd bij jongens dan bij meisjes, hoewel er bewijs is dat meisjes mogelijk worden onderdiagnosticeerd vanwege verschillende manifestaties van symptomen."
        },
        {
            question: "Wat is 'masking' of 'camouflage' bij autisme?",
            options: [
                "Een therapeutische aanpak om autisme te behandelen",
                "Het vermogen om autistische kenmerken te verbergen of sociaal geaccepteerd gedrag na te bootsen",
                "Een methode om autisme vroegtijdig te diagnosticeren",
                "Het gebruik van maskers om zintuiglijke overprikkeling te verminderen"
            ],
            correctKeywords: ["verbergen", "nabootsen", "camoufleren", "sociaal geaccepteerd"],
            explanation: "Masking of camouflage verwijst naar het bewust of onbewust verbergen van autistische kenmerken en het nabootsen van sociaal geaccepteerd gedrag om beter in te passen in sociale situaties."
        },
        {
            question: "Welke aanpak wordt vaak gebruikt om mensen met autisme te ondersteunen?",
            options: [
                "Volledige isolatie van sociale interacties",
                "Gedwongen gedragsverandering",
                "Gestructureerde routines en visuele ondersteuning",
                "Verplichte medicatie"
            ],
            correctKeywords: ["structuur", "routine", "visueel", "ondersteuning"],
            explanation: "Gestructureerde routines en visuele ondersteuning zijn effectieve benaderingen omdat ze voorspelbaarheid bieden en communicatie ondersteunen, wat vaak uitdagingen zijn voor mensen met autisme."
        },
        {
            question: "Wat is een common misconception over autisme?",
            options: [
                "Dat alle mensen met autisme bovengemiddeld intelligent zijn",
                "Dat autisme een levenslange conditie is",
                "Dat autisme invloed heeft op sociale interactie",
                "Dat autisme een spectrum is met verschillende uitingsvormen"
            ],
            correctKeywords: ["intelligent", "bovengemiddeld", "savant", "rain man"],
            explanation: "Een veelvoorkomende misvatting is dat alle mensen met autisme bovengemiddeld intelligent zijn of savant-vaardigheden hebben, zoals soms weergegeven in films en media. In werkelijkheid varieert het intelligentieniveau binnen het autismespectrum net zoals bij de algemene bevolking."
        }
    ],
    openQuestions: [
        {
            question: "Beschrijf minimaal drie mogelijke uitdagingen die iemand met autisme kan ervaren in een sociale situatie zoals een feestje.",
            correctKeywords: ["overprikkeling", "zintuiglijk", "communicatie", "ongeschreven regels", "smalltalk", "oogcontact", "sociale cues", "emoties", "herkennen", "drukte", "menigte", "lawaai", "onvoorspelbaarheid", "spontaan", "verandering", "flexibiliteit"],
            explanation: "Sociale situaties zoals feestjes kunnen verschillende uitdagingen vormen voor mensen met autisme, waaronder zintuiglijke overprikkeling door geluid en drukte, moeite met het begrijpen van ongeschreven sociale regels, uitdagingen met communicatie en smalltalk, moeite met het herkennen en interpreteren van sociale signalen en emoties, en stress door onvoorspelbaarheid."
        },
        {
            question: "Wat zijn 'executive functioning skills' en hoe kunnen deze beïnvloed worden bij mensen met autisme?",
            correctKeywords: ["plannen", "organiseren", "prioriteiten", "tijdmanagement", "werkgeheugen", "impulscontrole", "taakinitiatie", "flexibiliteit", "doelgericht", "metacognitie", "zelfmonitoring", "aandacht"],
            explanation: "Executive functioning skills zijn cognitieve processen die betrokken zijn bij het plannen, organiseren, tijdmanagement, werkgeheugen, taakinitiatie, emotieregulatie, flexibel denken en zelfmonitoring. Bij mensen met autisme kunnen deze vaardigheden vaak beïnvloed zijn, wat uitdagingen kan opleveren bij alledaagse taken, planning, aanpassing aan veranderingen en het reguleren van emoties."
        },
        {
            question: "Hoe kan de omgeving worden aangepast om beter tegemoet te komen aan de behoeften van mensen met autisme?",
            correctKeywords: ["visuele ondersteuning", "structuur", "routine", "voorspelbaarheid", "prikkelarm", "rustig", "duidelijk", "concreet", "zintuiglijk", "communicatie", "aanpassingen", "tijd", "overgangen", "signalen", "hulpmiddelen"],
            explanation: "Omgevingsaanpassingen kunnen o.a. bestaan uit: het bieden van structuur en voorspelbaarheid, het gebruik van visuele ondersteuning zoals pictogrammen of geschreven instructies, het creëren van prikkelarme ruimtes, duidelijke en concrete communicatie, het geven van voldoende tijd voor verwerking en overgangen, en het bieden van zintuiglijke hulpmiddelen of rustige ruimtes."
        },
        {
            question: "Leg uit wat wordt bedoeld met 'Theory of Mind' in relatie tot autisme.",
            correctKeywords: ["gedachten", "gevoelens", "perspectief", "inleven", "anderen", "standpunt", "mentaliseren", "empathie", "begrip", "intenties", "overtuigingen", "mindblindness"],
            explanation: "Theory of Mind verwijst naar het vermogen om te begrijpen dat anderen gedachten, gevoelens en perspectieven hebben die verschillen van de eigen ervaring. Bij mensen met autisme kan dit vermogen anders ontwikkeld zijn, wat kan leiden tot uitdagingen in het begrijpen van andermans intenties, het interpreteren van sociale situaties, en het anticiperen op reacties van anderen."
        },
        {
            question: "Hoe kan neurodiversiteit bijdragen aan een meer inclusieve samenleving voor mensen met autisme?",
            correctKeywords: ["acceptatie", "waarde", "diversiteit", "verschillen", "sterktes", "talent", "uniek", "perspectief", "bijdrage", "inclusie", "begrip", "accommodatie", "aanpassing", "neurotypisch", "neurodivergent", "respect"],
            explanation: "Het neurodiversiteitsperspectief erkent dat neurologische verschillen zoals autisme natuurlijke variaties zijn in het menselijk brein, en geen 'stoornissen' die 'genezen' moeten worden. Door deze verschillen te waarderen, in plaats van ze te zien als tekortkomingen, kan de samenleving inclusiever worden. Dit kan leiden tot meer begrip, betere aanpassingen in onderwijs en werkplekken, het benutten van unieke talenten en perspectieven, en het bevorderen van zelfacceptatie en eigenwaarde bij neurodivergente individuen."
        }
    ]
};

// Variables to track quiz state
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
        if (userAnswer !== undefined && questionData.options[userAnswer].toLowerCase().includes(questionData.correctKeywords[0].toLowerCase())) {
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
        if (keywordsFound >= 3) {
            score++;
        }
    }
}
function generateResultsSummary() {
    let summaryHTML = `<p>Bedankt voor het voltooien van de Autisme Quiz!</p>`;
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
    summaryHTML += `<h3>Antwoorden Overzicht:</h3>`;
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
