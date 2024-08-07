import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Products, { Product } from "./components/Products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products: Product[] = [
  {
    id: "1",
    name: "margareeta pizza",
    description: "this is very tasty pizza",
    image: "/pizzaimage.jpg",
    price: 200,
  },
  {
    id: "2",
    name: "margareeta pizza",
    description: "this is very tasty pizza",
    image: "/pizzaimage.jpg",
    price: 200,
  },
  {
    id: "3",
    name: "margareeta pizza",
    description: "this is very tasty pizza",
    image: "/pizzaimage.jpg",
    price: 200,
  },
  {
    id: "4",
    name: "margareeta pizza",
    description: "this is very tasty pizza",
    image: "/pizzaimage.jpg",
    price: 200,
  },
  {
    id: "5",
    name: "margareeta pizza",
    description: "this is very tasty pizza",
    image: "/pizzaimage.jpg",
    price: 200,
  },
  {
    id: "6",
    name: "margareeta pizza",
    description: "this is very tasty pizza",
    image: "/pizzaimage.jpg",
    price: 200,
  },
];
export default function Home() {
  return (
    <>
      <section className=" bg-slate-100">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="font-bold text-4xl leading-2">
              super delicius Pizza <br />
              <span className=" text-primary ">in 45 Minutes</span>
            </h1>
            <p className=" mt-3 leading-snug max-w-lg">
              enjoy a free meal if your order takes more than 45 minutes
            </p>
            <Button className=" px-4 py-7 rounded-3xl mt-8 text-lg font-bold hover:bg-green-500">
              get your pizza now
            </Button>
          </div>
          <div>
            <Image
              className=" rounded-3xl"
              alt="pizza-image"
              src={"/pizzaimage.jpg"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section>
        <div className=" container mt-6">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="pizza">pizza</TabsTrigger>
              <TabsTrigger value="cold-drinks">cold-drinks</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Products key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cold-drinks">cold drinks list</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
