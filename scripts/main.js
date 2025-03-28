document.addEventListener("DOMContentLoaded", function() {
    const meowElements = document.querySelectorAll(".quiz-card-content");
    const meowSound = document.getElementById("meow-sound");

    meowElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            meowSound.currentTime = 0; 
            meowSound.play();
        });
    });
});

function displayHomepageLeaderboard() {
    
    const leaderboardContainer = document.getElementById('homepage-leaderboard');
    
   
    if (!leaderboardContainer) return;
    
   
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
  
    if (leaderboard.length === 0) {
        leaderboardContainer.innerHTML += '<p>Nog geen spelers</p>';
        return;
    }
    

    const table = document.createElement('table');
    table.className = 'leaderboard-table';
    
    
    const headerRow = table.insertRow();
    ['Positie', 'Naam', 'Score', 'Datum'].forEach(headerText => { 
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
  
    leaderboard.slice(0, 10).forEach((entry, index) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = entry.name;
        row.insertCell(2).textContent = `${entry.score}/${entry.totalQuestions}`;
        row.insertCell(3).textContent = entry.date;  
    });
    
   
    leaderboardContainer.appendChild(table);
}


document.addEventListener('DOMContentLoaded', displayHomepageLeaderboard);
