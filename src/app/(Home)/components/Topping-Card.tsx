"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CircleCheckBig, Heading1 } from "lucide-react";
export type Topping = {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailabal: boolean;
};
type PropType = {
  topping: Topping;
};
const ToppingCard = ({ topping }: PropType) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (topping: any) => {
    setSelected(selected === topping ? null : topping);
  };

  return (
    <>
      <Button
        onClick={() => handleClick(topping)}
        className={cn(
          "flex flex-col h-40 w-36 mt-3 py-4 relative",
          selected ? "border-primary" : ""
        )}
        variant="outline"
      >
        <Image
          className=" rounded-2xl"
          src={topping.image}
          alt={topping.image}
          width={100}
          height={100}
        />
        <p>{topping.name}</p>
        <p> ${topping.price}</p>
        {selected && (
          <CircleCheckBig className=" absolute top-1 right-1 text-primary" />
        )}
      </Button>
    </>
  );
};

export default ToppingCard;
