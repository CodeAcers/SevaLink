document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteerForm');

    // Handle Toggle Buttons (Yes/No)
    const setupToggles = () => {
        const toggleGroups = document.querySelectorAll('.toggle-group');
        
        toggleGroups.forEach(group => {
            const buttons = group.querySelectorAll('.btn-toggle');
            
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all in group
                    buttons.forEach(b => b.classList.remove('active'));
                    // Add to clicked
                    btn.classList.add('active');
                    
                    console.log(`${group.dataset.type} set to: ${btn.textContent}`);
                });
            });
        });
    };

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation check for confirmation checkbox
        const isConfirmed = form.querySelector('.confirm-label input').checked;
        
        if (!isConfirmed) {
            alert('Please confirm that the information is correct.');
            return;
        }

        // Logic for gathering data could go here
        alert('Registration Successful! Welcome to the SevaLink team.');
    });

    // Initialize UI helpers
    setupToggles();
});














// // Find all button containers on the page
// document.querySelectorAll('.toggle-container').forEach(container => {
//   const yesBtn = container.querySelector('.yes-btn');
//   const noBtn = container.querySelector('.no-btn');

//   const setActive = (active, inactive) => {
//     // Styles for the button that was clicked
//     active.classList.replace('bg-white', 'bg-blue-600');
//     active.classList.replace('text-gray-700', 'text-white');
//     active.classList.replace('border-gray-300', 'border-blue-600');

//     // Styles for the button to be deselected
//     inactive.classList.replace('bg-blue-600', 'bg-white');
//     inactive.classList.replace('text-white', 'text-gray-700');
//     inactive.classList.replace('border-blue-600', 'border-gray-300');
//   };

//   yesBtn.addEventListener('click', () => setActive(yesBtn, noBtn));
//   noBtn.addEventListener('click', () => setActive(noBtn, yesBtn));
// });













const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');

  function setSelected(selected, unselected) {
    // Set Active Styles
    selected.classList.replace('bg-white', 'bg-blue-600');
    selected.classList.replace('text-gray-700', 'text-white');
    selected.classList.replace('border-gray-300', 'border-blue-600');

    // Set Inactive Styles
    unselected.classList.replace('bg-blue-600', 'bg-white');
    unselected.classList.replace('text-white', 'text-gray-700');
    unselected.classList.replace('border-blue-600', 'border-gray-300');
  }

  btnYes.addEventListener('click', () => setSelected(btnYes, btnNo));
  btnNo.addEventListener('click', () => setSelected(btnNo, btnYes));