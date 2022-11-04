import Image from "next/image";
import Title from "./Title";
import { FaCar, FaCartPlus } from "react-icons/fa";

const CampaignItem = () => {
  return (
    <div className="flex-1 p-2 flex items-center rounded-md bg-secondary gap-4">
      <div className="relative sm:w-40 sm:h-40 w-36 h-36 border-primary border-[5px] rounded-full overflow-hidden ">
        <Image
          src="/images/o1.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
          className="rounded-full hover:scale-105 transition-all"
        />
      </div>
      <div className="text-white flk">
        <Title className="text-3xl">Tasty Thursdays</Title>
        <div className="gap-1 flex">
          <span>20%</span>
          <span className="text-sm  ">Off</span>
        </div>
        <button className="btn-primary mt-2 flex items-center gap-x-2">
          <span>Order Now</span>
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex  sm:w-full w-[95%] justify-between sm:container mx-auto py-20 gap-5  flex-wrap ">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
