function updateStatus() {
    let newStatus = prompt("Enter your new status:");
    if (newStatus) {
        document.getElementById("status-text").innerText = newStatus;
    }
}
