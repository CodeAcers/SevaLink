 // Function to handle application clicks
function applyNow(opportunityName) {
    alert(`Application submitted for: ${opportunityName}!`);
}

// Sidebar navigation toggle
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all
        navItems.forEach(i => i.classList.remove('active'));
        // Add to clicked
        this.classList.add('active');
        
        console.log(`Navigating to: ${this.innerText}`);
    });
});

// Example: Dynamically update user name
document.addEventListener('DOMContentLoaded', () => {
    const user = "Alex Carter";
    document.getElementById('user-name').innerText = user;
});