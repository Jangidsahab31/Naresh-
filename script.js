document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            cartCount++;
            document.getElementById("cart-count").innerText = cartCount;

            let itemName = event.target.getAttribute("data-name");
            let itemPrice = event.target.getAttribute("data-price");

            alert(`Added "${itemName}" to the cart for $${itemPrice}`);
        });
    });
});



