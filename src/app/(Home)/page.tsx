import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className=" bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="font-bold text-4xl leading-2">
              super delicius Pizza <br />
              <span className=" text-primary ">in 45 Minutes</span>
            </h1>
            <p className=" mt-3 leading-snug max-w-lg">
              enjoy a free meal if your order takes more than 45 minutes
            </p>
            <Button
              className=" bg-primary px-4 py-7 rounded-3xl mt-8 text-lg font-bold hover:bg-green-500"
              variant="outline"
            >
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
    </>
  );
}
