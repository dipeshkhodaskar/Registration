function displayData() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var displayDataDiv = document.getElementById("displayData");
    displayDataDiv.innerHTML = `
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `;
}
