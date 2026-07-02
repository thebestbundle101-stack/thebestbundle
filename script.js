// --- PRICING CONFIG ---
const SINGLE_PRICE = 27;

const PACK_PRICES = {
    '3-books': 37,
    '5-books': 57,
    '8-books': 87,
    '10-books': 157
};

// --- CART STATE ---
let cartItems = [];
let selectedPack = null;

// --- SINGLE BOOK CHECKOUT ---
async function handleSingleCheckout(bookId) {
    const button = event.target;
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = 'Redirection...';

    try {
        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'single',
                bookId: bookId 
            })
        });

        const session = await response.json();
        if (session.url) {
            window.location.href = session.url;
        } else {
            throw new Error('No checkout URL');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de la redirection. Réessayez.');
        button.disabled = false;
        button.innerHTML = originalText;
    }
}

// --- CART FUNCTIONS ---
function addToCart(bookId, bookName) {
    selectedPack = null;
    document.querySelectorAll('.pack-btn').forEach(btn => btn.classList.remove('active'));
    
    const existingItem = cartItems.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ id: bookId, name: bookName, quantity: 1 });
    }
    updateCartUI();
    openCart();
}

function selectPack(packType, element) {
    cartItems = [];
    selectedPack = packType;
    document.querySelectorAll('.pack-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    updateCartUI();
    openCart();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (selectedPack) {
        total = PACK_PRICES[selectedPack];
        const packNames = {
            '3-books': 'Pack 3 E-books',
            '5-books': 'Pack 5 E-books', 
            '8-books': 'Pack 8 E-books',
            '10-books': 'Pack Complet 10 E-books + PLR'
        };
        cartItemsContainer.innerHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${packNames[selectedPack]}</h4>
                    <p>Quantité: 1</p>
                </div>
                <div class="cart-item-price">$${total}</div>
            </div>
        `;
    } else {
        cartItems.forEach(item => {
            const itemTotal = SINGLE_PRICE * item.quantity;
            total += itemTotal;
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>Quantité: ${item.quantity} x $${SINGLE_PRICE}</p>
                    </div>
                    <div class="cart-item-price">$${itemTotal}</div>
                </div>
            `;
        });
    }

    if (cartItems.length === 0 &&!selectedPack) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #6b7280;">Votre panier est vide</p>';
    }

    cartTotal.textContent = `$${total}`;
}

function openCart() {
    document.getElementById('cart-overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cart-overlay').classList.remove('active');
}

async function checkout() {
    if (cartItems.length === 0 &&!selectedPack) {
        alert('Votre panier est vide');
        return;
    }

    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.disabled = true;
    checkoutBtn.innerHTML = 'Redirection...';

    try {
        const body = selectedPack 
           ? { type: 'pack', packType: selectedPack }
            : { type: 'cart', items: cartItems };

        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const session = await response.json();
        if (session.url) {
            window.location.href = session.url;
        } else {
            throw new Error('No checkout URL');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de la redirection. Réessayez.');
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = 'Procéder au paiement sécurisé';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', updateCartUI);
