// document.addEventListener('DOMContentLoaded', () => {
    
//     // --- 1. NGO LOGIN LOGIC ---
//     // This looks for the form inside login-ngo.html
//     const ngoForm = document.getElementById('ngoLoginForm');
//     if (ngoForm) {
//         ngoForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             // Simple validation (Add your Firebase logic here later!)
//             if (email && password) {
//                 alert("NGO Login Successful!");
//                 window.location.href = "activity.html"; // Your NGO Dashboard
//             }
//         });
//     }

//     // --- 2. VOLUNTEER LOGIN LOGIC ---
//     // This looks for the form inside login-vol.html
//     const volForm = document.getElementById('volLoginForm');
//     if (volForm) {
//         volForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             if (email && password) {
//                 alert("Volunteer Login Successful!");
//                 window.location.href = "volunteer-dashboard.html"; // Your Vol Dashboard
//             }
//         });
//     }

//     // --- 3. LOGOUT LOGIC (Optional but helpful) ---
//     // Add 'id="logoutBtn"' to your dashboard navbars
//     const logoutBtn = document.getElementById('logoutBtn');
//     if (logoutBtn) {
//         logoutBtn.addEventListener('click', () => {
//             window.location.href = "index.html";
//         });
//     }
// });
















document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NGO LOGIN LOGIC ---
    const ngoForm = document.getElementById('ngoLoginForm');
    if (ngoForm) {
        ngoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                alert("NGO Login Successful!");
                window.location.href = "activity.html"; // The page with your priority cards
            }
        });
    }

    // --- 2. VOLUNTEER LOGIN LOGIC ---
    const volForm = document.getElementById('volLoginForm');
    if (volForm) {
        volForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                alert("Volunteer Login Successful!");
                window.location.href = "volunteer-dashboard.html"; // Your Volunteer page
            }
        });
    }

    // --- 3. LOGOUT LOGIC ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const ngoForm = document.getElementById('ngoLoginForm');

    if (ngoForm) {
        console.log("Form found! Ready for login."); // Check your console for this!

        ngoForm.addEventListener('submit', (e) => {
            e.preventDefault(); // THIS stops the refresh
            console.log("Submit button clicked, preventing refresh...");

            // Get the email to make sure the script sees the data
            const email = document.getElementById('email').value;
            
            if (email) {
                alert("Success! Redirecting now...");
                // Check your filename spelling: is it dashboad or dashboard?
                window.location.href = "ngo_dashboad.html"; 
            }
        });
    } else {
        console.error("Could not find ngoLoginForm. Check your HTML ID!");
    }
});



// document.addEventListener('DOMContentLoaded', () => {
    
//     const ngoForm = document.getElementById('ngoLoginForm');

//     if (ngoForm) {
//         ngoForm.addEventListener('submit', (e) => {
//             // 1. Prevent the page from refreshing
//             e.preventDefault(); 

//             // 2. Get the values (Good for testing)
//             const email = document.getElementById('email').value;
//             console.log("Logging in as:", email);

//             // 3. The Redirect (The "Link" part)
//             // Make sure the file name below matches your dashboard file exactly!
//             window.location.href = "activity.html"; 
//         });
//     }
// });



// document.addEventListener('DOMContentLoaded', () => {
    
//     // ... any other code you already have here ...

//     // --- NGO LOGIN REDIRECT ---
//     const ngoForm = document.getElementById('ngoLoginForm');
//     if (ngoForm) {
//         ngoForm.addEventListener('submit', (e) => {
//             e.preventDefault(); 
            
//             // This takes the user to the dashboard
//             // Check spelling: is it "dashboad" or "dashboard"?
//             window.location.href = "ngo_dashboad.html"; 
//         });
//     }

// }); // This is the end of your DOMContentLoaded block











































//ngo activity page


function updateStatus(index, newStatus, newColor) {
    const statusText = document.getElementById(`status-${index}`);
    if (statusText) {
        statusText.innerText = newStatus;
        statusText.style.color = newColor;
    }
}

document.getElementById('impactBtn').onclick = function() {
    alert("Impact session started!");
};




































// // ngo dashboad
// let needs = [
//     { id: 1, title: 'Food Drive – Delhi', applicants: 5 },
//     { id: 2, title: 'Clothes Donation – Noida', applicants: 12 }
// ];

// let currentEditId = null;

// document.addEventListener("DOMContentLoaded", () => {

//     function render() {
//         const list = document.getElementById('needsList');
//         document.getElementById('activeCount').innerText = needs.length;
//         list.innerHTML = '';

//         needs.forEach(need => {
//             const div = document.createElement('div');
//             div.className = 'need-row';

//             div.innerHTML = `
//                 <div class="need-details">
//                     <strong>${need.title}</strong><br>
//                     <small style="color:gray">Item ${need.id}</small>
//                 </div>

//                 <button class="btn-edit" onclick="openEdit(${need.id})">Edit</button>

//                 <button class="btn-view" onclick="viewApplicants(${need.applicants})">
//                     View Applicants (${need.applicants})
//                 </button>
//             `;

//             list.appendChild(div);
//         });
//     }

//     window.render = render;

//     document.getElementById('postNeedBtn').onclick = () => {
//         needs.unshift({
//             id: Date.now(),
//             title: 'New Relief Request',
//             applicants: 0
//         });

//         render();
//     };

//     render();
// });

// function openEdit(id) {
//     currentEditId = id;

//     const need = needs.find(n => n.id === id);

//     document.getElementById('editInput').value = need.title;
//     document.getElementById('editModal').style.display = 'flex';
// }

// function closeModal() {
//     document.getElementById('editModal').style.display = 'none';
// }

// function saveEdit() {
//     const need = needs.find(n => n.id === currentEditId);

//     need.title = document.getElementById('editInput').value;

//     render();
//     closeModal();
// }

// function setActive(el) {
//     document.querySelectorAll('.nav-item').forEach(i =>
//         i.classList.remove('active')
//     );

//     el.classList.add('active');
// }

// function viewApplicants(num) {
//     alert("Viewing " + num + " applicants");
// }