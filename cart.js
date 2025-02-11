document.addEventListener("DOMContentLoaded",showCart);

//Show Cart Items
function showCart() {
    let Cart = JSON.parse(localStorage.getItem("cart"))
||  [];
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = '$ {item.name} = $${item.price}';
        cartList.appendChild(listItem);
    });
}

// Clear Cart
function clearCart() {
    localStorage.removeItem("cart");
    showCart();
}