import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-secondary py-36">
      <div className="container mx-auto">
        <div className="relative w-[445px] h-[600px]">
          <Image src="/images/about-img.png" alt="" layout="fill" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
