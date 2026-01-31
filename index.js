// Simple web page interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');

    // Add click handlers to sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clicked:', this.textContent);
            alert('You clicked: ' + this.textContent);
        });
    });

    // Add card interaction
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
});
