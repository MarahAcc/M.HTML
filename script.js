function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = {
        name: name,
        price: price,
        image: image
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart!");
}
function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>

                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    totalElement.textContent = total;
}


function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


function clearCart() {

    localStorage.removeItem("cart");

    displayCart();
}


displayCart();