import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};
type PropTypes = { product: Product };
const Products = ({ product }: PropTypes) => {
  return (
    <div className="mt-3">
      <Card>
        <CardHeader>
          <Image
            className=" rounded-2xl"
            alt={product.image}
            src={product.image}
            width={300}
            height={3000}
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <p>this is very tasty pizza</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="flex items-center space-x-4">
            <span>from</span>
            <span>${product.price}</span>
          </p>
          <Button className=" bg-green-500 rounded-3xl">choose</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Products;
