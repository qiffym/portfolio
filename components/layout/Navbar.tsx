"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="container">
      <div className="relative flex items-center justify-between">
        <div className="px-4">
          <Link
            href={"/"}
            className="block py-6 text-lg font-bold text-primary"
          >
            qiffym
          </Link>
        </div>
        <div className="flex items-center px-4">
          <button
            onClick={() => setHamburger(!hamburger)}
            id="hamburger"
            name="hamburger"
            type="button"
            className={`absolute right-4 block ${
              hamburger && "hamburger-active"
            } lg:hidden`}
          >
            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>

          <nav
            className={`${
              !hamburger && "hidden"
            } rounded-box absolute right-4 top-full w-full max-w-[250px] bg-white shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none`}
          >
            <ul className="menu rounded-box menu-vertical bg-base-100 lg:menu-horizontal lg:bg-transparent">
              <li className="hover-bordered">
                <a href={"#home"}>Beranda</a>
              </li>
              <li className="hover-bordered">
                <a href={"#about"}>Tentang Saya</a>
              </li>
              <li className="hover-bordered">
                <a href={"#portfolio"}>Portfolio</a>
              </li>
              <li className="hover-bordered">
                <a href={"#portfolio"}>Client</a>
              </li>
              <li className="hover-bordered">
                <a href={"#portfolio"}>Blog</a>
              </li>
              <li className="hover-bordered">
                <a href={"#contact"}>Kontak</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
