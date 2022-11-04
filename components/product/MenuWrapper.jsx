import React from "react";
import Title from "../Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  const deneme = "deded";

   

  return (
    <div className="container mx-auto mb-16">
      <div className=" mb-16 flex items-center flex-col w-full ">
        <Title className="text-[40px] ">Our Menu</Title>
        <div className="flex gap-8">
          <button className="active-button">All</button>
          <button className="">Burger</button>
          <button className="">Pizza</button>
          <button className="">Pasta</button>
          <button className="">Fries</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
