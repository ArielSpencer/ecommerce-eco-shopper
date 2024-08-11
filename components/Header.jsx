import Link from "next/link";
import Nav from "./Nav";

import { IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";


const Header = () => {
  return (
    <header className="text-black">
      <div className="py-8 xl:py-12 container mx-auto flex justify-between items-center gap-8">
        <Link href="/" className="flex text-4xl text-accent font-semibold">
          <IoIosLeaf />
          <h1 className="flex gap-2">
            Eco <span className="text-black">Shopper</span>
          </h1>
        </Link>
        <div className="w-full px-4 flex justify-start items-center border-2 rounded-lg gap-4">
          <IoSearchOutline />
          <p>pesquisar...</p>
        </div>
        <div className="flex justify-between items-center gap-2 text-3xl">
          <IoHeartOutline className="w-[50px] border-r-2" />
          <div className="flex items-center gap-2">
            <MdOutlineShoppingBag />
            <div className="text-[12px] flex flex-col gap-2 leading-none">
              <h2>Carrinho:</h2>
              <p>R$57.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-2 xl:py-4 mx-auto flex justify-around items-center text-white">
        <Nav />
        <Link href="#" className="flex items-center gap-2 hover:text-accent">
          <FaWhatsapp />
          <p>11 99100-7079</p>
        </Link>
      </div>
    </header>
  )
}

export default Header;