import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react";
import ToppingCard from "./Topping-Card";
import { Topping } from "./Topping-Card";
const toppings = [
  {
    id: "1",
    name: "chicken",
    image: "/pizza_image_1.jpg",
    price: 2000,
    isAvailabal: true,
  },
  {
    id: "2",
    name: "beef",
    image: "/pizza_image_2.jpg",
    price: 1290,
    isAvailabal: false,
  },
  {
    id: "3",
    name: "motton",
    image: "/pizza_image_1.jpg",
    price: 2090,
    isAvailabal: true,
  },
];
const ToppingList = () => {
  return (
    <section className="mt-6">
      <h1>Extra Toppings</h1>
      <div className="grid grid-cols-3 gap-6">
        {toppings.map((topping) => (
          <ToppingCard key={topping.id} topping={topping} />
        ))}
      </div>
    </section>
  );
};

export default ToppingList;
