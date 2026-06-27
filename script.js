function goToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function subscribeUser() {
    alert("Thank you for subscribing to Eman's Fashion Club!");
}

let cart = 0;

const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        cart++;

        document.getElementById("cartCount").innerText = cart;

        alert("Product added to cart!");
    });

});