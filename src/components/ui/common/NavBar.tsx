import React from "react";
import { Badge, Phone, Pizza, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NavBar = () => {
  return (
    <header className="bg-slate-200">
      <nav className=" container py-2 flex items-center sp justify-between">
        <div className="flex items-center space-x-3">
          <Pizza className="text-primary" />
          <h1>Pizza</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="resturents" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="The Monal Resturent">
                The Monal Resturent
              </SelectItem>
              <SelectItem value="Tehzeeb Pizza Center">
                Tehzeeb Pizza Center
              </SelectItem>
              <SelectItem value="Ranchers">Ranchers</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-12">
          <ul className="flex items-center space-x-3">
            <li>
              <Link href="/menu">menu</Link>
            </li>
            <li>
              <Link href="/menu">orders</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-3">
            <div className="flex relative space-x-30 mr-5">
              <ShoppingCart className="text-primary" />
              <span className=" h-5 w-5 bg-primary rounded-full flex items-center justify-center absolute -top-3 -right-4">
                3
              </span>
            </div>
            <p className="flex items-center space-x-3">
              <Phone />
              <p>03485402441</p>
            </p>
            <Button className=" bg-primary" variant="outline">
              logout
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
