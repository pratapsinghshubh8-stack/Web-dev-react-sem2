let cart =
JSON.parse(
    sessionStorage.getItem("cart")
) || [];

const cartDisplay =
document.getElementById("cart-count");

cartDisplay.textContent = cart.length;


const buttons =
document.querySelectorAll(".add-cart");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const box =
        button.parentElement;

        const productName =
        box.querySelector("h2").innerText;

        cart.push(productName);

        sessionStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        cartDisplay.textContent =
        cart.length;

        alert(productName + " added to cart");
    });

});


const searchBar =
document.querySelector(".searchbar");

const products =
document.querySelectorAll(".box");

if(searchBar)
{
    searchBar.addEventListener("keyup", () => {

        let value =
        searchBar.value.toLowerCase();

        products.forEach(product => {

            let name =
            product.querySelector("h2")
            .innerText
            .toLowerCase();

            if(name.includes(value))
            {
                product.style.display =
                "block";
            }
            else
            {
                product.style.display =
                "none";
            }

        });

    });
}