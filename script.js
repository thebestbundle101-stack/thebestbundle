// Item #3: Button functionality - See All Bundles → scroll to packs
function scrollToPacks() {
    document.getElementById('packs').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Item #4: Pack card interactions
document.addEventListener('DOMContentLoaded', function() {
    const packCards = document.querySelectorAll('.pack-card');
    
    packCards.forEach(card => {
        card.addEventListener('click', function() {
            const packName = this.querySelector('.pack-name').textContent;
            const packPrice = this.querySelector('.pack-price').textContent;
            console.log(`Selected: ${packName} - ${packPrice}`);
            // Add your checkout redirect here when ready
            // Example: window.location.href = `checkout.html?pack=${packName}&price=${packPrice}`;
        });
    });
    
    // Item #1: Language selector placeholder
    const langSelector = document.querySelector('.language');
    if (langSelector) {
        langSelector.addEventListener('click', function(e) {
            console.log('Language clicked:', e.target.textContent);
            // Add language switching logic here when ready
        });
    }
});
