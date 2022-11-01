import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../Title";

const SearchModal = ({ setIsSearchModal }) => {
  return (
    <div className="text-black backdrop-blur-sm  absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="md:w-[600px] w-[370px] h-[600px] p-10  bg-white border-primary border-2 rounded-lg flex  flex-col items-center">
          <Title className="text-4xl text-primary mb-2">Search</Title>
          <input
            placeholder="Search..."
            className="w-full bg-[#00000018] outline-none rounded-lg p-2"
          />
          <div className="w-full mt-5 ">
            <ul>
              <li className="border-2 p-1 rounded-lg cursor-pointer hover:border-primary  transition-all border-[#8d8c8c4f] flex justify-between items-center w-full">
                <div className="relative flex ">
                  <Image src="/images/f1.png" width={48} height={48} />
                </div>
                <span>Good Pizza</span>
                <span>10$</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default SearchModal;
