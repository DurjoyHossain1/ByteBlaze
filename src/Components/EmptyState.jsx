import React from "react";
import { Link } from "react-router-dom";

const EmptyState = ({ massage, address, label }) => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-116px)] items-center pb-16">
      <h2 className="text-3xl font-semibold mb-4 text-zinc-700">{massage}</h2>
      <Link
        to={address}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
        <span className="relative text-black group-hover:text-white">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default EmptyState;