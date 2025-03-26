document.addEventListener("DOMContentLoaded", function() {
    const meowElements = document.querySelectorAll(".quiz-card-content");
    const meowSound = document.getElementById("meow-sound");

    meowElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            meowSound.currentTime = 0; // Reset het geluid
            meowSound.play();
        });
    });
});
// Function to display leaderboard on homepage
function displayHomepageLeaderboard() {
    // Get the leaderboard container from the homepage
    const leaderboardContainer = document.getElementById('homepage-leaderboard');
    
    // Check if leaderboard container exists
    if (!leaderboardContainer) return;
    
    // Retrieve leaderboard from localStorage
    const leaderboard = JSON.parse(localStorage.getItem('autismeQuizLeaderboard')) || [];
    
   
    // If no entries, show a message
    if (leaderboard.length === 0) {
        leaderboardContainer.innerHTML += '<p>Nog geen spelers</p>';
        return;
    }
    
    // Create table for leaderboard
    const table = document.createElement('table');
    table.className = 'leaderboard-table';
    
    // Create table header
    const headerRow = table.insertRow();
    ['Positie', 'Naam', 'Score'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    // Add top 10 entries to the table
    leaderboard.slice(0, 10).forEach((entry, index) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = entry.name;
        row.insertCell(2).textContent = `${entry.score}/${entry.totalQuestions}`;
    });
    
    // Add table to container
    leaderboardContainer.appendChild(table);
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', displayHomepageLeaderboard);
