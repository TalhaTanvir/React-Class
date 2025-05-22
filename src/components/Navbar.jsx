import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-12 flex justify-center items-center bg-neutral-300 ">
      <ul className="flex gap-8">
        <Link to={"/"}>
          <li className="hover:underline">API Tester</li>
        </Link>
        <Link to={"/show"}>
          <li className="hover:underline">Show</li>
        </Link>
        <Link to={"/loading"}>
          <li className="hover:underline">Loading</li>
        </Link>
        <Link to={"/likes"}>
          <li className="hover:underline">Likes</li>
        </Link>
        <Link to={"/input"}>
          <li className="hover:underline">Input</li>
        </Link>
      </ul>
    </div>
  );
}
