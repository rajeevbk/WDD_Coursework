let orderSubTotal = 0;
let itemsInCart = 0;
const shoppingCart = [];

function addToCart(id) {
    const btn = document.getElementById(id);

    btn.getElementsByTagName('span')[0].innerText = 'Remove from Cart';

    const quantity = document.getElementById(`${id}-quantity`).value;
    const cart = document.querySelector("#cart");

    const item = document.createElement("tr");
    const itemName = document.createElement("td");

    itemName.classList.add('order-item');
    itemName.innerText = btn.getAttribute('data-item-name') + " x " + quantity;
    item.append(itemName);

    const itemPrice = document.createElement("td");
    itemPrice.innerText = (btn.getAttribute('data-price') * quantity) + ' LKR';
    item.append(itemPrice);
    item.id = `order-${id}`;
    cart.prepend(item);

    orderSubTotal += parseFloat(btn.getAttribute('data-price')) * quantity;
    itemsInCart += 1;
    updateTotal();

    shoppingCart.push({
        "name": btn.getAttribute('data-item-name'),
        "quantity": quantity,
        "price": btn.getAttribute('data-price') * quantity
    });

    btn.classList.replace('btn-add-cart', 'btn-remove-cart');
    btn.onclick = function () {
        removeFromCart(id)
    };

}

function removeFromCart(id) {
    const btn = document.getElementById(id);
    const quantity = document.getElementById(`${id}-quantity`).value;
    btn.classList.replace('btn-remove-cart', 'btn-add-cart');
    btn.getElementsByTagName('span')[0].innerText = 'Add to Cart';
    btn.onclick = function () {
        addToCart(id)
    };
    const item = document.querySelector(`#order-${id}`);
    document.querySelector("#cart").removeChild(item);
    orderSubTotal -= parseFloat(btn.getAttribute('data-price')) * quantity;
    itemsInCart -= 1;
    updateTotal();
    shoppingCart.splice({
        "name": btn.getAttribute('data-item-name'),
        "quantity": quantity,
        "price": btn.getAttribute('data-price') * quantity
    }, 1)
}

function updateTotal() {
    document.querySelector("#order-subtotal").innerHTML = `${round2Two(orderSubTotal)} LKR`;
    document.querySelector("#order-tax").innerHTML = `${round2Two(orderSubTotal / 5)} LKR`;
    document.querySelector("#order-total").innerHTML = `${round2Two(orderSubTotal + orderSubTotal / 5)} LKR`;
    if (itemsInCart === 0) {
        const cart = document.querySelector("#items-in-cart");
        cart.classList.remove('d-inline-block');
        cart.classList.add('d-none')
    } else {
        const cart = document.querySelector("#items-in-cart");
        cart.classList.remove('d-none');
        cart.classList.add('d-inline-block');
        cart.innerHTML = itemsInCart;

    }
}

function round2Two(value) {
    return Math.round(value * 100) / 100;
}

function checkout() {
    const name = document.getElementById("first-name").value;
    if (validDateFormData()) {
        let summery = `Dear ${name},\nYou have ordered `;
        shoppingCart.forEach(function (item) {
            summery += `${item['quantity']} ${item['name']} at cost of ${item['price']} LKR,`
        });
        summery = summery.slice(0, -1);
        alert(`${summery}\n\nYour Total Bill is ${round2Two(orderSubTotal + orderSubTotal / 5)} LKR \nYour Order ID is #${Math.floor((Math.random() * 5000) + 1000)}`);
        window.location.reload();
    }
}

function validDateFormData() {
    const formInputs = document.forms["billing-details"].getElementsByTagName("input");
    if (document.forms["billing-details"].getElementsByTagName("select")[0].value === '') {
        alert("You need to select a country before placing the order");
        return false
    }
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === '' || formInputs[i].value === null) {
            alert(formInputs[i].id.replace('-', ' ') + ' is required to place the order');
            return false
        }
    }
    return true
}

function showCheckOut() {
    document.querySelector("#checkout-wrapper").classList.add("d-block");
    document.querySelector("#shop-wrapper").classList.add("d-none");
}

function hideCheckOut() {
    document.querySelector("#checkout-wrapper").classList.remove("d-block");
    document.querySelector("#shop-wrapper").classList.remove("d-none");
}