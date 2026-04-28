// ngo dashboad
let needs = [
    { id: 1, title: 'Food Drive – Delhi', applicants: 5 },
    { id: 2, title: 'Clothes Donation – Noida', applicants: 12 }
];

let currentEditId = null;

document.addEventListener("DOMContentLoaded", () => {

    function render() {
        const list = document.getElementById('needsList');
        document.getElementById('activeCount').innerText = needs.length;
        list.innerHTML = '';

        needs.forEach(need => {
            const div = document.createElement('div');
            div.className = 'need-row';

            div.innerHTML = `
                <div class="need-details">
                    <strong>${need.title}</strong><br>
                    <small style="color:gray">Item ${need.id}</small>
                </div>

                <button class="btn-edit" onclick="openEdit(${need.id})">Edit</button>

                <button class="btn-view" onclick="viewApplicants(${need.applicants})">
                    View Applicants (${need.applicants})
                </button>
            `;

            list.appendChild(div);
        });
    }

    window.render = render;

    document.getElementById('postNeedBtn').onclick = () => {
        needs.unshift({
            id: Date.now(),
            title: 'New Relief Request',
            applicants: 0
        });

        render();
    };

    render();
});

function openEdit(id) {
    currentEditId = id;

    const need = needs.find(n => n.id === id);

    document.getElementById('editInput').value = need.title;
    document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

function saveEdit() {
    const need = needs.find(n => n.id === currentEditId);

    need.title = document.getElementById('editInput').value;

    render();
    closeModal();
}

function setActive(el) {
    document.querySelectorAll('.nav-item').forEach(i =>
        i.classList.remove('active')
    );

    el.classList.add('active');
}

function viewApplicants(num) {
    alert("Viewing " + num + " applicants");
}



















import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from './config.js';

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateSmartPost() {
    const missionInput = document.getElementById("missionInput");
    const resultBox = document.getElementById("resultBox");
    const aiBtn = document.getElementById("aiBtn");

    const userInput = missionInput.value.trim();
    if (!userInput) return alert("Please enter a need!");

    // UI Feedback
    resultBox.style.display = "block";
    resultBox.innerHTML = "<em>✨ Gemini is crafting your post...</em>";
    aiBtn.disabled = true;
try {
    const model = genAI.getGenerativeModel(
        { model: "gemini-3-flash-preview" },
        { apiVersion: 'v1beta' } 
    );

    const prompt = `Act as an NGO Campaign Expert. Requirement: "${userInput}". 
    Create a catchy Title, 3 Volunteer Roles, and 3 Hashtags.`;

    const result = await model.generateContent(prompt);
    const response = await result.response; // Get the full response object
    const rawText = response.text();       // Get the raw markdown text

    // --- CLEANING LOGIC STARTS HERE ---
    let cleanHtml = rawText
        .replace(/#/g, '')                         // Removes all # symbols
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Converts **bold** to <strong>
        .replace(/\n/g, '<br>');                   // Converts new lines to web breaks

    // Update the UI with the cleaned HTML
    resultBox.innerHTML = `<strong>Results:</strong><br>${cleanHtml}`;
    // --- CLEANING LOGIC ENDS HERE ---
    
} catch (error) {
    console.error("AI Error:", error);
    resultBox.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
} finally {
    aiBtn.disabled = false;
}
}

document.getElementById("aiBtn").addEventListener("click", generateSmartPost);