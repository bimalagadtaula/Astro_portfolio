// Get modal element
const modal = document.getElementById('music-modal');
const audio = document.getElementById('background-audio');

// Show modal on page load
window.onload = function() {
    modal.style.display = 'block';
};

// Close modal when the user clicks on <span> (x)
document.querySelector('.close-button').onclick = function() {
    modal.style.display = 'none';
};

// Handle Yes button click
document.getElementById('yes-button').onclick = function() {
    audio.muted = false; // Unmute the audio
    audio.play();
    modal.style.display = 'none'; // Close the modal
    console.log("fkfkfjgj")
};

// Handle No button click
document.getElementById('no-button').onclick = function() {
    modal.style.display = 'none'; // Close the modal
};

// for toggling the navbar
const navToggle = document.querySelector('.nav-toggle');
const navClass = document.querySelector('.navclass');

navToggle.addEventListener('click', () => {
    navClass.classList.toggle('active');
});

