// Page turning functionality
let currentPage = 0;
const totalPages = document.querySelectorAll('.page').length;

function showPage(pageNum) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show current page
    document.getElementById(`page-${pageNum}`).classList.add('active');

    // Update flipped state for all pages
    document.querySelectorAll('.page').forEach((page, index) => {
        if (index < pageNum) {
            page.classList.add('flipped');
        } else {
            page.classList.remove('flipped');
        }
    });
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        showPage(currentPage);
    }

    const audio = new Audio('assets/songs/songs.mp3');
    audio.volume = 0.5; // Set volume to 50%
    audio.play();
    audio.currentTime = 0; // Reset to start
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }

    const audio = new Audio('assets/songs/songs.mp3');
    audio.volume = 0.5; // Set volume to 50%
    audio.play();
    audio.currentTime = 0; // Reset to start
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        prevPage();
    }
});