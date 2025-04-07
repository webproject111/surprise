// JavaScript for opening the gift box
function openGiftBox() {
    // Get the gift content
    var giftContent = document.getElementById('gift-content');

    // Toggle the display of the gift content
    if (giftContent.style.display === "none" || giftContent.style.display === "") {
        giftContent.style.display = "block"; // Show the content
        giftContent.style.animation = "showContent 1s forwards"; // Trigger animation
    } else {
        giftContent.style.display = "none"; // Hide the content
    }
}