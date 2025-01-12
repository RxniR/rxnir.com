document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("currentUser");
    function displayWelcomeMessage() {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        let greeting;
        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        const welcomeMessageDiv = document.getElementById('welcomeMessage');
        if (welcomeMessageDiv) {
            const userGreeting = currentUser ? `Hello, ${currentUser}!` : 'Welcome to my collection of Minecraft Datapacks!';
            welcomeMessageDiv.innerHTML = `
                <h2>${greeting} ${userGreeting}</h2>
                <p>Explore the projects and search for any project i have available.</p>
            `;
        } else {
            console.warn('No welcome message element found.');
        }
    }
    function displayTotalProjects(totalProjects = 15) {
        const welcomeMessageDiv = document.getElementById('welcomeMessage');
        if (welcomeMessageDiv) {
            const projectCount = document.createElement('p');
            projectCount.textContent = `You have a total of ${totalProjects} datapacks available to explore.`;
            welcomeMessageDiv.appendChild(projectCount);
        }
    }
    displayWelcomeMessage();
    displayTotalProjects();
});