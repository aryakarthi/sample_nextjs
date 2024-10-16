import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between h-20 bg-zinc-400">
      <Link href={"/"} className="text-red-500">Logo</Link>
      <nav>
        <ul className="flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
