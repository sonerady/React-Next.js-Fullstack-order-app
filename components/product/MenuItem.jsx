import Image from "next/image";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";

const MenuItem = () => {
  return (
    <div className="mt-10 bg-secondary gap-2 flex  rounded-3xl flex-col">
      <div className=" bg-[#f5f3f3] w-full rounded-bl-[40px] rounded-2xl rounded-br-none p-4 justify-center items-center flex">
        <div className="relative w-36 h-36 z-50 hover:scale-105 overflow-hidden transtiion-all duration-300">
          <Image src="/images/f1.png" layout="fill" />
        </div>
      </div>
      <div className="text-white flex flex-col gap-2 p-2 ">
        <h1 className="text-xl font-bold">Delicious Pizza</h1>
        <p className="text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iste
          fugiat qui id modi corrupti quisquam officia asperiores? Earum, saepe
          ab sed architecto molestias.
        </p>
        <div className="flex justify-between items-center mt-2">
          <span>$20</span>
          <button className="btn-primary ">
            <BsCartPlusFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
