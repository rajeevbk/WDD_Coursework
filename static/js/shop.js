function addToCart(id) {
    const btn = document.getElementById(id);
    btn.classList.replace('btn-add-cart', 'btn-remove-cart');
    btn.getElementsByTagName('span')[0].innerText = 'Remove from Cart';
    console.log(btn.getAttribute('data-price'));
    btn.onclick = function () {
        removeFromCart(id)
    };
}

function removeFromCart(id) {
    const btn = document.getElementById(id);
    btn.classList.replace('btn-remove-cart', 'btn-add-cart');
    btn.getElementsByTagName('span')[0].innerText = 'Add to Cart';
    console.log(btn.getAttribute('data-price'));
    btn.onclick = function () {
        addToCart(id)
    };
}