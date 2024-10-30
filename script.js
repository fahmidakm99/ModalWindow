document.addEventListener('DOMContentLoaded', () => {
    function openModal() {
        // Display the modal and overlay
        document.querySelector('.mymodal').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    }

    function closeModal() {
        // Hide the modal and overlay
        document.querySelector('.mymodal').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }

    // Attach functions to global scope to access them in HTML onclick events
    window.openModal = openModal;
    window.closeModal = closeModal;
});
