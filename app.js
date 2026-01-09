const API_BASE = "http://localhost:8080";

// 🔐 Get token
function getToken() {
    return localStorage.getItem("token");
}

// 🚪 Redirect if not logged in
if (!getToken()) {
    window.location.href = "index.html";
}

// 📥 Load tasks on page load
window.onload = loadTasks;

// 🔄 Load tasks
function loadTasks() {
    fetch(`${API_BASE}/tasks`, {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    })
        .then(res => {
            if (!res.ok) throw new Error("Unauthorized");
            return res.json();
        })
        .then(tasks => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach(t => {
                const li = document.createElement("li");
                li.innerHTML = `
        <b>${t.title}</b> - ${t.description}
        <button onclick="deleteTask(${t.id})">❌</button>
      `;
                list.appendChild(li);
            });
        })
        .catch(() => {
            alert("Session expired");
            logout();
        });
}

// ➕ Create task
function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch(`${API_BASE}/tasks`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + getToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
    })
        .then(res => res.json())
        .then(() => {
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            loadTasks();
        });
}

// 🗑 Delete task
function deleteTask(id) {
    fetch(`${API_BASE}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    })
        .then(() => loadTasks());
}

// 🚪 Logout
function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
