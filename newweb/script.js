async function searchUser() {

    const name = document.getElementById("name").value;

    const response = await fetch(
        `/.netlify/functions/api?name=${encodeURIComponent(name)}`
    );

    const users = await response.json();

    const result = document.getElementById("result");

    if (users.length === 0) {
        result.innerHTML = "<p>User not found.</p>";
        return;
    }

    result.innerHTML = users.map(user => `
        <div>
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Age: ${user.age}</p>
        </div>
    `).join("");
}

