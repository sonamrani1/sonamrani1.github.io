document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const closeCartButton = document.querySelector('.close-cart');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const checkoutButton = document.querySelector('.checkout');
    const checkoutScreen = document.getElementById('checkoutScreen');
    const backToShopping = document.getElementById('backToShopping');
    const checkoutItems = document.querySelector('.checkout-items');
    const totalQuantityElement = document.getElementById('totalQuantity');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutButton1 = document.querySelector('.checkout1');
    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price'),
                img: button.getAttribute('data-img'),
                quantity: 1
            };
            addToCart(product);
        });
    });

    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });
    closeCartButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    checkoutButton.addEventListener('click', () => {
        displayCheckoutScreen();
       
    });

    checkoutButton1.addEventListener('click', () => {
        // Get total price and save to localStorage
        const totalPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));
        localStorage.setItem('totalPrice', totalPrice);
        // Redirect to payment page
        window.location.href = '../html/payment.html';
    });



    backToShopping.addEventListener('click', (e) => {
        e.preventDefault();
        checkoutScreen.style.display = 'none';
        document.querySelector('header').style.display = 'flex';
        document.querySelector('.product-list').style.display = 'flex';
    });

    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.name === product.name);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }
        updateCart();
    }
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(product => {
            const item = document.createElement('li');
            item.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <span>${product.name}</span>
                <span>${product.price}</span>
                <div>
                    <button class="decrease-quantity" data-name="${product.name}">-</button>
                    <span>${product.quantity}</span>
                    <button class="increase-quantity" data-name="${product.name}">+</button>
                </div>
            `;
            cartItems.appendChild(item);
        });
        cartCount.textContent = cart.reduce((total, product) => total + product.quantity, 0);

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-name');
                const productIndex = cart.findIndex(item => item.name === productName);
                if (cart[productIndex].quantity > 1) {
                    cart[productIndex].quantity -= 1;
                } else {
                    cart.splice(productIndex, 1);
                }
                updateCart();
            });
        });
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-name');
                const productIndex = cart.findIndex(item => item.name === productName);
                cart[productIndex].quantity += 1;
                updateCart();
            });
        });
    }

    function displayCheckoutScreen() {
        checkoutScreen.style.display = 'block';
        document.querySelector('header').style.display = 'none';
        document.querySelector('.product-list').style.display = 'none';
        cartModal.style.display = 'none';

        checkoutItems.innerHTML = '';
        let totalQuantity = 0;
        let totalPrice = 0;

        cart.forEach(product => {
            const item = document.createElement('li');
            item.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <span>${product.name}</span>
                <span>$${product.price * product.quantity}</span>
                <span>Quantity: ${product.quantity}</span>
            `;
            checkoutItems.appendChild(item);
            totalQuantity += product.quantity;
            totalPrice += product.price * product.quantity;
        });


        totalQuantityElement.textContent = totalQuantity;
        totalPriceElement.textContent = totalPrice;


        // localStorage.setItem('totalPrice', totalPrice);
    }
});