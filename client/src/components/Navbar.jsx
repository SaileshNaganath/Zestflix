
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {

  const [showDropDown, setShowDropDown] = useState(false);

  const links = [
    { name: "Home", link: "/home" },
    { name: "Movies", link: "/movies" },
    { name: "Bucket List", link: "/mylist" },
    { name: "Logout", link: "/" },
  ];

  return (
    <header className="z-20 px-12 py-3 text-white bg-background fixed w-full flex min-h-[--header-row-height]  items-center justify-between">

      <p className="text-4xl font-semibold">Zestflix</p>
  
            <div className="relative">
        <button
          id="dropdownDelayButton"
          className="text-white bg-transparent focus:outline-none font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center "
          type="button"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <RxAvatar style={{ width: '30px', height: '30px' }} />
          <svg
            className="w-2.5 h-2.5 ml-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdownDelay"
          className={`absolute right-0 z-10 bg-grey divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
            showDropDown ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link
                  to={link}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
            </li>
          </ul>
        </div>
      </div>
      

  </header>
   
  );
}

