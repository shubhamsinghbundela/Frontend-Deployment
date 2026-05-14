const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", async () => {
    // Capture input values
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // Create payload
    const data = {
        userName,
        password,
        firstName,
        lastName
    };

    try {
        // Send request to backend
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log(result);
        alert("Signup successful!");

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong");
    }
});