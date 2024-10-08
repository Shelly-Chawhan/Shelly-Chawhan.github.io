document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regular expression for validating email format
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;
    // Regular expression for validating names (only letters and spaces allowed)
    const namePattern = /^[A-Za-z\s]+$/;

    // Validate name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (!namePattern.test(name)) {
        alert("Name can only contain letters and spaces.");
        return;
    }

    // Validate email
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate subject
    if (subject === "") {
        alert("Please enter a subject.");
        return;
    }

    // Validate message
    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // If all validations pass, send the email
    sendMail(name, email, subject, message);
});

function sendMail(name, email, subject, message) {
    let params = {
        email: email, // Capture the sender's email
        name: name,        // Capture the sender's name
        subject: subject,  // Capture the email subject
        message: message,  // Capture the email message
    };

    // Call the EmailJS send function
    emailjs.send("service_90o2yup", "template_3bq88ia", params)
    .then(function(response) {
        // Show success message if email was sent successfully
        alert("Message sent successfully!");
    }, function(error) {
        // Show error message if email could not be sent
        alert("Failed to send message: " + error.text);
    });
}
