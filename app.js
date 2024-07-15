const menuItems = document.querySelectorAll(".menuItem");
const sliderWrapper = document.querySelector(".sliderWrapper");
const sliderItems = document.querySelectorAll(".sliderItem");
const product = document.querySelector("#product");
const mainProductImg = document.querySelector("#mainProductImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productDesc = document.querySelector(".productDesc");
const colorOptions = document.querySelectorAll(".color");
const sizeOptions = document.querySelectorAll(".size");
const buyButtons = document.querySelectorAll(".buyButton");
const payment = document.querySelector(".payment");
const closePayment = document.querySelector("#closePayment");

const products = [
  {
    id: 0,
    title: "AIR FORCE",
    price: 1999,
    desc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
    colors: [
      { code: "black", img: "images/air.png" },
      { code: "blue", img: "images/air2.png" }
    ],
  },
  {
    id: 1,
    title: "JORDAN",
    price: 1149,
    desc: "The Air Jordan is a line of basketball shoes produced by Nike, Inc. related to the player's involvement in NBA.",
    colors: [
      { code: "black", img: "images/jordan.png" },
      { code: "blue", img: "images/jordan2.png" }
    ],
  },
  {
    id: 2,
    title: "BLAZER",
    price: 2100,
    desc: "The Nike Blazer was only the third shoe released under the newly-named sports brand Nike in 1973.",
    colors: [
      { code: "black", img: "images/blazer.png" },
      { code: "blue", img: "images/blazer2.png" }
    ],
  },
];

let chosenProduct = products[0];

const updateProductDetails = (product) => {
  mainProductImg.src = product.colors[0].img;
  productTitle.textContent = product.title;
  productPrice.textContent = `Rs ${product.price}`;
  productDesc.textContent = product.desc;
};

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
    chosenProduct = products[index];
    updateProductDetails(chosenProduct);
  });
});

colorOptions.forEach((color, index) => {
  color.addEventListener("click", () => {
    mainProductImg.src = chosenProduct.colors[index].img;
  });
});

sizeOptions.forEach((size) => {
  size.addEventListener("click", () => {
    sizeOptions.forEach(s => s.style.backgroundColor = "#ddd");
    size.style.backgroundColor = "var(--primary-color)";
    size.style.color = "#fff";
  });
});

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    payment.style.display = "flex";
  });
});

closePayment.addEventListener("click", () => {
  payment.style.display = "none";
});

document.querySelector("#paymentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Payment Successful!");
  payment.style.display = "none";
});
