document.getElementById('contactButton').addEventListener('click', function() {
    let userName = prompt("What's your email?");
    if (userName) {
        alert(`Thank you for reaching out, ${userName}! I'll get back to you soon.`);
    } else {
        alert("Please enter your email.");
    }
});
