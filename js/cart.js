const body = document.querySelector("body");
const openshopping = document.querySelector(".shopping");
const closeshopping = document.querySelector(".closeshopping");
const list = document.querySelector(".list");
const listcard = document.querySelector(".listcard");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

openshopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeshopping.addEventListener("click", () => {
    body.classList.remove("active")
})



let products = [
    {
        id: 1,
        name: "product1",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 2,
        name: "product2",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 3,
        name: "product3",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 4,
        name: "product4",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 5,
        name: "product5",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 6,
        name: "product6",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 7,
        name: "product7",
        image: "../img/product/bathroom.jpg",
        price: 200
    },
    {
        id: 8,
        name: "product8",
        image: "../img/product/bathroom.jpg",
        price: 1200
    }

]

let listcards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newdiv = document.createElement("div");
        newdiv.classList.add("item");
        newdiv.innerHTML = `
        <img src =${value.image}>
        <div class ="title">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to Card</button>
        `;
        list.appendChild(newdiv)
    })
}

initApp()


const addToCard = (key) => {
    if (listcards[key] == null) {
        listcards[key] = JSON.parse(JSON.stringify(products[key]));
        listcards[key].quantity = 1
    }

    reloadCard();
}

const reloadCard = () => {
    listcard.innerHTML = "";

    let totalprice = 0;
    let totalCount = 0;

    total.innerText = totalprice.toLocaleString();
    quantity.innerText = totalCount;

    listcards.forEach((value, key) => {



        if (value != null) {
            let newdiv = document.createElement("li");
            newdiv.innerHTML = `
                <div><img src =${value.image}></div>
                <div class = "cardtitle">${value.name}</div>
                <div class = "cardprice">${value.price.toLocaleString()}
                </div>

                <div>
                    <button style="background-color: #560bad"  class="cardbutton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>

                    <button style="background-color: #560bad" class="cardbutton" onclick =" changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listcard.appendChild(newdiv);
        }

        totalCount = totalCount + value.quantity;
        totalprice = totalprice + value.price;

        total.innerText = totalprice.toLocaleString();
        quantity.innerText = totalCount;

    })

}

const changeQuantity = (key, item_quantity) => {
    if (item_quantity == 0) {
        delete listcards[key]
    }
    else {
        listcards[key].quantity = item_quantity;
        listcards[key].price = item_quantity * products[key].price
    }

    reloadCard();
}



