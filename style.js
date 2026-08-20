let currentPage = 1;
const totalPages = 2;

// DOM Elements
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');

// Handle Clicking Texture Pack Cards
function downloadPack(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Update Pagination Display
function updatePage() {
    if (currentPage === 1) {
        page1.classList.remove('hidden');
        page2.classList.add('hidden');
    } else {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    }
    
    pageIndicator.innerText = `Page ${currentPage} / ${totalPages}`;
}

// Event Listeners for Arrows
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
});
