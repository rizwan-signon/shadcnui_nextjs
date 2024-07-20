"use client";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import React from "react";
export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <main className="">
      <h1>welcome to pizza shop</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Button variant="outline">Button</Button>
    </main>
  );
}
