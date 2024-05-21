
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Container } from "./container";
import { Button } from "./button";

export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "Waiting List", link: "/mylist" },
  ];

  return (
    <header className="relative z-20 text-white">

    <Container className="flex min-h-[--header-row-height] items-center justify-between">
      <p className="text-4xl font-semibold">Zestflix</p>
      <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className={`search ${showSearch ? "show-search" : ""}`}>
          <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
          <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
            </div>
      <Button size="medium">Login</Button>
    </Container>

  </header>
   
  );
}

