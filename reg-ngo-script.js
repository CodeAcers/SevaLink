document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ngoForm');
    
    // 1. Navigation Menu Functionality
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            console.log("Navigating to:", item.innerText.trim());
        });
    });

    // 2. Handle File Upload Triggers
    window.triggerFile = (type) => {
        if (type === 'media') {
            document.getElementById('mediaInput').click();
        } else if (type === 'proof') {
            document.getElementById('proofInput').click();
        }
    };

    // Feedback when files are selected
    document.getElementById('mediaInput').addEventListener('change', function() {
        if(this.files[0]) alert(`Selected file: ${this.files[0].name}`);
    });

    document.getElementById('proofInput').addEventListener('change', function() {
        if(this.files[0]) alert(`Selected proof document: ${this.files[0].name}`);
    });

    // 3. Form Submission Logic
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate Skill Selection
        const skills = document.querySelectorAll('input[name="skill"]:checked');
        if (skills.length === 0) {
            alert("Please select at least one skill requirement.");
            return;
        }

        // Gather basic data for demonstration
        const formData = {
            ngoName: document.getElementById('ngoName').value,
            problem: document.getElementById('problemTitle').value,
            peopleAffected: document.getElementById('peopleAffected').value,
            deadline: document.getElementById('deadline').value
        };

        console.log("Submitting NGO Data:", formData);

        // Success animation/feedback
        const btn = document.querySelector('.register-btn');
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Registering...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`Success! ${formData.ngoName} has been registered to the SevaLink network.`);
            btn.innerHTML = '<i class="fas fa-check"></i> Registered';
            btn.style.background = "#10b981";
            // form.reset(); // Uncomment to clear form after success
        }, 1500);
    });

    // 4. Logout Functionality
    window.handleLogout = () => {
        if (confirm("Are you sure you want to logout from SevaLink?")) {
            window.location.reload();
        }
    };
});