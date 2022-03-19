import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  {
    _id: uuid(),
    name: "AJ1 Pine Green High",
    brand: "Nike",
    price: "15000",
    gender: "men",
    categoryName: "sports-shoes",
    rating: "5",
    collection: "summer"
  },
  {
    _id: uuid(),
    name: "AJ1 Retro High Electro Orange High",
    brand: "Nike",
    price: "13000",
    gender: "women",
    categoryName: "sports-shoes",
    rating: "4",
    collection: "winter"
  },
  {
    _id: uuid(),
    name: "Yeezy Boost 350 V2 Light",
    brand: "Adidas",
    price: "25000",
    gender: "women",
    categoryName: "casual-shoes",
    rating: "4",
    collection: "winter"
  },
  {
    _id: uuid(),
    name: "Colorblocked Sliders",
    brand: "Adidas",
    price: "2000",
    gender: "girl",
    categoryName: "flip-flops",
    rating: "3.5",
    collection: "summer"
  },
  {
    _id: uuid(),
    name: "Printed-Slides",
    brand: "Puma",
    price: "1800",
    gender: "boy",
    categoryName: "sandals",
    rating: "3",
    collection: "summer"
  },
  {
    _id: uuid(),
    name: "Ultraboost-2021",
    brand: "Adidas",
    price: "18000",
    gender: "women",
    categoryName: "sport-shoes",
    rating: "5",
    collection: "winter"
  },
  {
    _id: uuid(),
    name: "Air-max-1",
    brand: "Nike",
    price: "8000",
    gender: "girl",
    categoryName: "casual-shoes",
    rating: "4",
    collection: "summer"
  },
  {
    _id: uuid(),
    name: "Superstar Sneaker",
    brand: "Adidas",
    price: "9000",
    gender: "men",
    categoryName: "casual-shoes",
    rating: "4",
    collection: "summer"
  }
];
