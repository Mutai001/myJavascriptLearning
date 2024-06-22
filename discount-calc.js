let cart = [];
let discountCode = 0; // Initialize as a number

function addToCart(item, quantity, price) {
    const existingItem = cart.find((cartItem) => cartItem.item === item);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ item, quantity, price });
    }
    document.getElementById(`${item.toLowerCase()}-count`).textContent =
        existingItem ? existingItem.quantity : quantity;
    console.log(`${item} added to cart.`);
}

function applyDiscount(code) {
    discountCode = code === "FruitLover" ? 0.10 : 0; // Store discount as a number
    document.getElementById("discount-message").textContent =
        discountCode ? `Discount Applied! ${discountCode * 100}% OFF` : "Invalid Discount Code";
    console.log(`Discount code applied: ${code}`);
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
    if (discountCode) {
        total = calculateDiscount(total, discountCode);
    }
    document.getElementById(
        "total-price"
    ).textContent = `Total: ${formatCurrency(total)}`;
    console.log(`Total: ${formatCurrency(total)}`);
}

function calculateDiscount(price, discount) {
    return price - price * discount;
}

function formatCurrency(amount) {
    return `$${parseFloat(amount).toFixed(2)}`;
}