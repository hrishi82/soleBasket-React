import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  {
    _id: uuid(),
    name: "AJ1 Turbo Green High",
    brand: "Nike",
    price: "15000",
    gender: "men",
    category: "sports-shoes",
    rating: "5",
    collection: "summer",
    size: "UK40",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1647700886/nelson-ndongala-qMfrID95uJI-unsplash_spracq.jpg"
  },
  {
    _id: uuid(),
    name: "AJ1 Retro Electro Orange High",
    brand: "Nike",
    price: "13000",
    gender: "women",
    category: "sports-shoes",
    rating: "4",
    collection: "winter",
    size: "UK34",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1648119317/electroorange_nbuxnv.jpg"
  },
  {
    _id: uuid(),
    name: "Yeezy Boost 350 V2 Light",
    brand: "Adidas",
    price: "25000",
    gender: "women",
    category: "casual-shoes",
    rating: "4",
    collection: "winter",
    size: "UK32",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1648119326/yeezy350_j0vnx6.jpg"
  },
  {
    _id: uuid(),
    name: "Yeezy Slides",
    brand: "Adidas",
    price: "6000",
    gender: "girl",
    category: "flip-flops",
    rating: "3.5",
    collection: "summer",
    size: "UK26",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1647700867/damian-barczak-c5hhud9vfOU-unsplash_onswev.jpg"
  },
  {
    _id: uuid(),
    name: "Printed-Slides",
    brand: "Puma",
    price: "1800",
    gender: "boy",
    category: "sandals",
    rating: "3",
    collection: "summer",
    size: "UK28",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1648119305/puma-men-slippers-men-charcoal-grey-solid-breeze-v1-idp-synthetic-thong-flip-flops_jhgzxa.jpg"
  },
  {
    _id: uuid(),
    name: "Ultraboost-2021",
    brand: "Adidas",
    price: "18000",
    gender: "women",
    category: "sports-shoes",
    rating: "5",
    collection: "winter",
    size: "UK30",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1648119322/ub_buuzlh.jpg"
  },
  {
    _id: uuid(),
    name: "Air-max-1",
    brand: "Nike",
    price: "8000",
    gender: "girl",
    category: "casual-shoes",
    rating: "4",
    collection: "summer",
    size: "UK32",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1648119326/airmax1_cil03l.jpg"
  },
  {
    _id: uuid(),
    name: "Superstar Sneaker",
    brand: "Adidas",
    price: "9000",
    gender: "men",
    category: "casual-shoes",
    rating: "4",
    collection: "summer",
    size: "UK40",
    img: "https://res.cloudinary.com/dac2rwutk/image/upload/v1648119313/superstar_yb4lym.jpg"
  }
];
