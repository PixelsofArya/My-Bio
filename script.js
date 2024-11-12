function toggleBio() {
    const bioText = document.getElementById("bioText");
    if (bioText.style.maxHeight) {
        bioText.style.maxHeight = null; // Collapse
        bioText.style.padding = "0 10px";
    } else {
        bioText.style.maxHeight = "200px"; // Expanded height (set to fit content)
        bioText.style.padding = "10px";
    }
}
// Get all dropdown buttons
const dropdowns = document.querySelectorAll('.dropdown-btn');

// Add click event listener to each dropdown button
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function() {
        // Get the parent dropdown container
        const parentDropdown = this.parentElement;

        // Toggle the 'open' class to show/hide dropdown content
        parentDropdown.classList.toggle('open');
    });
});






