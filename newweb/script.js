async function searchUser() {

    const name = document.getElementById("name").value;

    const response = await fetch(
        `/.netlify/functions/api?name=${encodeURIComponent(name)}`
    );

    const users = await response.json();

    const result = document.getElementById("result");

    if (users.length === 0) {
        result.innerHTML = "<p style='color: #111;'>User not found.</p>";
        result.style.color = "#111";
        return;
    }

    result.style.color = "#111";
    result.innerHTML = users.map(user => `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Age: ${user.age}</p>
        </div>
    `).join("");
}
