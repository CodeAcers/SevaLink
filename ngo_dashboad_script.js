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