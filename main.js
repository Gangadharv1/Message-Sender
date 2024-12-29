document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== "") {
        // Display the sent message
        const sentMessagesOutput = document.getElementById('sentMessagesOutput');
        const newMessageDiv = document.createElement('div');
        newMessageDiv.textContent = message;
        sentMessagesOutput.appendChild(newMessageDiv);

        // Clear the input
        messageInput.value = '';
    } else {
        alert("Please enter a message before sending.");
    }
});