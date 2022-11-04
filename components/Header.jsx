import Logo from "./Logo";
import { useState } from "react";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SearchModal from "./modals/SearchModal";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary flex relative   ">
      <div className="container mx-auto flex justify-between text-white items-center w-full h-full">
        <Logo />
        <nav
          className={`sm:bg-none sm:flex w-full h-full justify-center items-center ${
            !isOpen && "hidden"
          }`}
        >
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30 w-full mt-2 sm:hidden text-3xl justify-center items-center 100 flex"
          >
            <AiOutlineCloseCircle />
          </span>
          <ul className="flex gap-x-3 sm:static uppercase top-0 left-0 sm:justify-center sm:items-start justify-center items-center sm:bg-transparent  bg-slate-400 gap-6 absolute sm:w-auto sm:h-auto w-screen h-screen sm:flex-row flex-col ">
            <li className="hover:text-primary cursor-pointer transition-all">
              <a href="">Home</a>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all">
              <a href="">Menu</a>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all">
              <a href="">About</a>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all">
              <a href="">Booktable </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-x-3">
          <a href="" className="hover:text-primary transition-all">
            <FaUserAlt />
          </a>
          <a href="" className="hover:text-primary transition-all">
            <HiShoppingCart />
          </a>
          <button
            onClick={() => setIsSearchModal(true)}
            className="hover:text-primary transition-all"
          >
            <FaSearch />
          </button>
          <a className="ml-2 md:flex hidden" href="">
            <button className="btn-primary whitespace-nowrap">
              Order Online
            </button>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex sm:hidden transition-all hover:color-primary"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {isSearchModal && <SearchModal setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
