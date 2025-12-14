document.addEventListener('DOMContentLoaded', function() {
    // Animate price segments on hover
    const priceSegments = document.querySelectorAll('.price-segment');
    
    priceSegments.forEach(segment => {
        segment.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        segment.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Animate direction links
    const dirLinks = document.querySelectorAll('.dir-link');
    
    dirLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const direction = this.getAttribute('href').substring(1);
            console.log(`Showing ${direction} facing properties`);
            // In real implementation, filter properties here
        });
    });
    
    // Price ticker animation for highlighted segment
    const highlightPrice = document.querySelector('.highlight .price');
    const prices = ['₹1.2-5 Cr', '₹1.5-5 Cr', '₹1.2-4.8 Cr'];
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % prices.length;
        highlightPrice.textContent = prices[currentIndex];
        highlightPrice.style.transform = 'scale(1.05)';
        setTimeout(() => {
            highlightPrice.style.transform = 'scale(1)';
        }, 300);
    }, 4000);
});