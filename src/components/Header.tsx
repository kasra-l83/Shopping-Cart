import {Link} from "react-router-dom"
import { FaSortDown } from "react-icons/fa6"
import { MdShoppingCart } from "react-icons/md"
import { useAppSelector } from "../redux/hooks"

function Header() {
  const cartItems= useAppSelector((state) => state.cart.items);

  return (
    <header className="py-5 bg-darkGray">
      <div className="container mx-auto flex justify-around items-center text-[white]">
        <a href="/" className="text-xl">Shopping Cart</a>
        <input type="search" placeholder="Search a product..." 
          className="w-[498px] h-9 rounded text-[black] px-3 hidden md:block focus:outline-none focus:border-lightBlue focus:ring-2 focus:ring-lightBlue"
        />
        <Link to="/cart">
          <button className="px-3 py-1 rounded bg-lightGreen flex gap-x-1 hover:bg-[green]">
            <MdShoppingCart className="text-3xl"/>
            {cartItems.length}
            <FaSortDown />
          </button>
        </Link>
      </div>
    </header>
  )
}
export default Header