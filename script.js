// --- SECTION 1: SUBSCRIBE FEATURE ---
function subscribeAlert() {
    alert("Thank you for subscribing.");
}

// --- SECTION 2: SHOPPING CART (sessionStorage) ---

// Function to add items to the session storage cart
function addToCart(itemName) {
    // Get existing cart from sessionStorage or start a new array if empty
    let cart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
    
    // Add the new item to the array
    cart.push(itemName);
    
    // Save the updated array back to sessionStorage
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    
    alert(itemName + " has been added to your cart!");
}

// Function to view items (The "View Cart" feature)
function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    
    if (!cart || cart.length === 0) {
        alert("Your cart is currently empty.");
    } else {
        alert("Items in your cart:\n" + cart.join("\n"));
    }
}

// Function to clear the cart (sessionStorage)
function clearCartAlert() {
    sessionStorage.removeItem('shoppingCart');
    alert("Cart cleared.");
}

// Function to process order (clears sessionStorage)
function processOrderAlert() {
    let cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    if (!cart || cart.length === 0) {
        alert("Your cart is empty. Add items before processing.");
    } else {
        alert("Thank you for your order! Your session data has been processed.");
        sessionStorage.removeItem('shoppingCart');
    }
}

// --- SECTION 3: CONTACT FORM (localStorage) ---

function contactSubmitAlert() {
    // Pulling data from the HTML input IDs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('message').value;

    // Create a data object to store
    const contactData = {
        customerName: name,
        customerEmail: email,
        customerMessage: feedback,
        submissionDate: new Date().toLocaleString()
    };

    // Save to localStorage (persists even after closing browser)
    localStorage.setItem('lastContactSubmission', JSON.stringify(contactData));

    alert("Thank you, " + name + "! Your information has been saved to local storage.");
}
