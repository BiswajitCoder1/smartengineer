const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const services = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenservice = services[0];

const currentserviceImg = document.querySelector(".serviceImg");
const currentserviceTitle = document.querySelector(".serviceTitle");
const currentservicePrice = document.querySelector(".servicePrice");
const currentserviceColors = document.querySelectorAll(".color");
const currentserviceSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen service
    choosenservice = services[index];

    //change texts of currentservice
    currentserviceTitle.textContent = choosenservice.title;
    currentservicePrice.textContent = "$" + choosenservice.price;
    currentserviceImg.src = choosenservice.colors[0].img;

    //assing new colors
    currentserviceColors.forEach((color, index) => {
      color.style.backgroundColor = choosenservice.colors[index].code;
    });
  });
});

currentserviceColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentserviceImg.src = choosenservice.colors[index].img;
  });
});

currentserviceSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentserviceSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

