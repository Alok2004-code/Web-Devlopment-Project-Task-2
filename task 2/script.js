let cart = [];



function updateCart() {
    var cartItems = document.getElementById('cart-items');
    var totalElement = document.getElementById('total');
    var cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)} ${item.unit}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = `Total: ₹${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
}

function addToCart(productName, price, unit) {
    cart.push({ name: productName, price: price, unit: unit });
    updateCart();
    var numberofItems = document.querySelector(".count");
    numberofItems.innerHTML = cart.length;

}



// console.log(cart.length)