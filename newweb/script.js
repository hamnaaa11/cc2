async function searchUser() {

    const name = document.getElementById("name").value;

    const response = await fetch(
        `/.netlify/functions/users?name=${encodeURIComponent(name)}`
    );

    const data = await response.json();

    const result = document.getElementById("result");

    if (data.length === 0) {
        result.innerHTML = "<p>User not found.</p>";
        return;
    }

    result.innerHTML = data.map(user => `
        <div>
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Age: ${user.age}</p>
        </div>
    `).join("");
}
