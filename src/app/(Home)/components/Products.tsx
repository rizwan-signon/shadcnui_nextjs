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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
export type Product = {
  id: string;
  name: string;
  description: string;
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
            height={300}
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
          <Dialog>
            <DialogTrigger className=" bg-green-500 rounded-3xl py-3 px-4 font-semibold hover:bg-primary transition-all duration-300">
              choose
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0">
              <div className="flex">
                <div className="w-1/3 bg-slate-200 rounded p-10 flex items-center justify-center">
                  <Image
                    className=" rounded-2xl"
                    alt={product.image}
                    src={product.image}
                    width={300}
                    height={300}
                  />
                </div>
                <div className=" bg-white w-2/3 pl-6">
                  <h2 className="font-bold text-3xl mt-3">{product.name}</h2>
                  <p className="mt-2 ">{product.description}</p>
                  <h4 className="mt-6">choose the pizza </h4>
                  <RadioGroup
                    defaultValue="card"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="small"
                        id="small"
                        className="peer sr-only"
                        aria-label="small"
                      />
                      <Label
                        htmlFor="small"
                        className="flex flex-col items-center justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        small
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="medium"
                        id="medium"
                        className="peer sr-only"
                        aria-label="medium"
                      />
                      <Label
                        htmlFor="medium"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        medium
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="large"
                        id="large"
                        className="peer sr-only"
                        aria-label="large"
                      />
                      <Label
                        htmlFor="large"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Large
                      </Label>
                    </div>
                  </RadioGroup>
                  <div>
                    <h4 className="mt-6">Choose the size</h4>
                    <RadioGroup
                      defaultValue="card"
                      className="grid grid-cols-3 gap-4 mt-2"
                    >
                      <div>
                        <RadioGroupItem
                          value="thin"
                          id="thin"
                          className="peer sr-only"
                          aria-label="thin"
                        />
                        <Label
                          htmlFor="thin"
                          className="flex flex-col items-center justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          thin
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="thick"
                          id="thick"
                          className="peer sr-only"
                          aria-label="thick"
                        />
                        <Label
                          htmlFor="thick"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          thick
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Products;
