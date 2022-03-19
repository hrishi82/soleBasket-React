import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "sports-shoes",
  },
  {
    _id: uuid(),
    categoryName: "casual-shoes",
  },
  {
    _id: uuid(),
    categoryName: "flip-flops",
  },
  {
    _id: uuid(),
    categoryName: "sandals",
  },
];
