import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import store from "../redux/store";
import { useSelector } from "react-redux";
import Logo from "../assets/images/logo/logo.png"
import { PROFILE_PICTURE } from "../constants";
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState([false])
    const {user} = useContext(userContext)

    const cartItems = useSelector((store) => store.cart.items)

    return (
      <nav className="bg-yellow-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Hunger Bite Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-red-900">HUNGER BITE</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="flex text-sm bg-red-900 rounded-full md:me-0 focus:ring-4 focus:ring-red-700" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={PROFILE_PICTURE} alt="user photo"/>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div className="hidden z-50  my-4 text-base  list-none bg-yellow-400 divide-y divide-red-900 rounded-lg shadow" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-red-900 font-bold">Bonnie Green</span>
                <span className="block text-sm text-black">name@mail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-yellow-600 hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-yellow-600 hover:text-white">Settings</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-yellow-600 hover:text-white">Earnings</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-yellow-600 hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
            <button  data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-900 rounded-lg md:hidden hover:bg-red-900 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-red-900 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-red-900 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link href="#" className="block px-3 text-red-900 rounded hover:bg-red-900 hover:text-yellow-300 md:p-2" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="#" className="flex justify-center items-center px-3 text-red-900 rounded hover:bg-red-900 hover:text-yellow-300 md:p-2">Cart<FaCartArrowDown size={"1.3em"} className="mx-1"/>{<p>{cartItems.length}</p>}</Link>
            </li>
            <li>
              <Link href="#" className="block px-3 text-red-900 rounded hover:bg-red-900 hover:text-yellow-300 md:p-2">Services</Link>
            </li>
            <li>
              <Link href="#" className="block px-3 text-red-900 rounded hover:bg-red-900 hover:text-yellow-300 md:p-2">Pricing</Link>
            </li>
            <li>
              <Link href="#" className="block px-3 text-red-900 rounded hover:bg-red-900 hover:text-yellow-300 md:p-2">Developer</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Header;