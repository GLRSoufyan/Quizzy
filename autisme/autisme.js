
        const quizData = {
            title: "Autisme Quiz",
            questions: [
                {
                    id: 1,
                    text: "Dit is vraag 1:",
                    options: [
                        "Antwoord 1",
                        "Antwoord 2",
                        "Antwoord 3",
                        "Antwoord 4"
                    ],
                    correctAnswer: 2 // Index of correct answer (0-based)
                },
                {
                    id: 2,
                    text: "Welke van de volgende is een kenmerk van autisme?",
                    options: [
                        "Moeite met sociale interacties",
                        "Altijd hyperactief zijn",
                        "Geen interesse in speciale onderwerpen",
                        "Moeite met lezen"
                    ],
                    correctAnswer: 0
                },
                // More questions would be added here
            ],
            currentQuestionIndex: 0,
            userAnswers: []
        };
        
        // Get all answer options
        const answerOptions = document.querySelectorAll('.answer-option');
        
        // Add click event to each answer option
        answerOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                answerOptions.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.querySelector('.answer-check').classList.remove('selected');
                });
                
                // Add selected class to clicked option
                option.classList.add('selected');
                option.querySelector('.answer-check').classList.add('selected');
                
                // Save the answer
                const answerValue = option.getAttribute('data-answer');
                quizData.userAnswers[quizData.currentQuestionIndex] = parseInt(answerValue) - 1;
                
                // In a real app, this would automatically move to the next question after a short delay
                // For demo purposes, we'll add a timeout
                setTimeout(() => {
                    if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
                        quizData.currentQuestionIndex++;
                        loadQuestion(quizData.currentQuestionIndex);
                    } else {
                        // Quiz complete
                        calculateResults();
                    }
                }, 1000);
            });
        });
        
        // Function to load a question
        function loadQuestion(index) {
            const question = quizData.questions[index];
            document.querySelector('.question-text').textContent = question.text;
            
            // Update the answer options
            const optionElements = document.querySelectorAll('.answer-text');
            for (let i = 0; i < optionElements.length; i++) {
                optionElements[i].textContent = question.options[i];
            }
            
            // Reset selection
            answerOptions.forEach(opt => {
                opt.classList.remove('selected');
                opt.querySelector('.answer-check').classList.remove('selected');
            });
            
            // If user has already answered this question, show the selection
            if (quizData.userAnswers[index] !== undefined) {
                const selectedOption = answerOptions[quizData.userAnswers[index]];
                selectedOption.classList.add('selected');
                selectedOption.querySelector('.answer-check').classList.add('selected');
            }
        }
        
        // Function to calculate results
        function calculateResults() {
            let correctAnswers = 0;
            
            for (let i = 0; i < quizData.questions.length; i++) {
                if (quizData.userAnswers[i] === quizData.questions[i].correctAnswer) {
                    correctAnswers++;
                }
            }
            
            const scorePercentage = (correctAnswers / quizData.questions.length) * 100;
            
            // In a real app, this would display a results page
            alert(`Quiz voltooid! Jouw score: ${scorePercentage.toFixed(1)}%`);
            
            // Redirect to results page or show results modal
            // window.location.href = `results.html?score=${scorePercentage}`;
        }
        
        // This would initialize the first question in a real app
        // But for this demo, the HTML is already set up for question 1
 