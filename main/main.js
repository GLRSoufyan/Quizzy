document.getElementsByClassName("quiz-card hoogbegaafdheid")[0].addEventListener("click", function(event){
    if (event.target === this)
    {
        window.location.href='/autisme/autisme.html';
    }
});
        const quizzes = {
            autisme: {
                title: "Autisme Quiz",
                questions: [
                    {
                        question: "Wat is een veelvoorkomend kenmerk van autisme?",
                        options: [
                            "Moeite met sociale interacties",
                            "Altijd verlegen zijn",
                            "Extreem extravert gedrag",
                            "Zeer goede leesvaardigheid"
                        ],
                        answer: 0
                    },
                    // More questions would be added here
                ]
            },
            depressie: {
                title: "Depressie Quiz",
                questions: [
                    {
                        question: "Wat is een symptoom van depressie?",
                        options: [
                            "Overmatige energie",
                            "Aanhoudende somberheid",
                            "Verhoogde eetlust",
                            "Minder behoefte aan slaap"
                        ],
                        answer: 1
                    },
                    // More questions would be added here
                ]
            },
            dyscalculie: {
                title: "Dyscalculie Quiz",
                questions: [
                    {
                        question: "Wat is dyscalculie?",
                        options: [
                            "Moeite met lezen",
                            "Moeite met rekenen",
                            "Moeite met schrijven",
                            "Moeite met sociale vaardigheden"
                        ],
                        answer: 1
                    },
                    // More questions would be added here
                ]
            },
            hoogbegaafdheid: {
                title: "Hoogbegaafdheid Quiz",
                questions: [
                    {
                        question: "Wat is een kenmerk van hoogbegaafdheid?",
                        options: [
                            "Snel leren",
                            "Weinig interesse in lezen",
                            "Voorkeur voor concrete taken",
                            "Moeite met abstract denken"
                        ],
                        answer: 0
                    },
                    // More questions would be added here
                ]
            }
        };

        // Get all quiz cards
        const quizCards = document.querySelectorAll('.quiz-card');
        
        // Add click event to each card
        quizCards.forEach(card => {
            card.addEventListener('click', () => {
                const quizType = card.getAttribute('data-quiz');
                startQuiz(quizType);
            });
        });
        
      
        function startQuiz(quizType) {
            if (!quizzes[quizType]) {
                alert('Quiz not available yet!');
                return;
            }
            
            window.location.href = `autisme.html?type=${quizType}`;
        }
            
            // Here you would implement the actual quiz interface
            // For example:
            // window.location.href = `/quiz.html?type=${quizType}`;
            // Or show a modal with the quiz questions
        
        
        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');
        
        searchButton.addEventListener('click', () => {
            search();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                search();
            }
        });
        
        function search() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                return;
            }
            
            // Filter quiz cards based on search term
            quizCards.forEach(card => {
                const quizTitle = card.querySelector('h3').textContent.toLowerCase();
                const quizDescription = card.querySelector('p').textContent.toLowerCase();
                
                if (quizTitle.includes(searchTerm) || quizDescription.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Reset search if nothing is found
            const visibleCards = document.querySelectorAll('.quiz-card[style="display: flex"]');
            if (visibleCards.length === 0) {
                quizCards.forEach(card => {
                    card.style.display = 'flex';
                });
                alert('Geen quizzes gevonden voor: ' + searchTerm);
            }
        }
