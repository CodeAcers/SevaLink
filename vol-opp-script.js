// Function to handle the View Opportunity action
function viewDetails(opName) {
    alert(`Loading details for: ${opName}...`);
    console.log(`User clicked view for ${opName}`);
}

// Simple logic to switch active sidebar links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add to the clicked link
        this.classList.add('active');
    });
});

// Example: Tracking "Get Started"
document.querySelector('.btn-started').addEventListener('click', () => {
    console.log("Onboarding process started");
});