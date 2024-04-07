import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/404.jpg"


const BlogsCard = ({blog}) => {
    const {title,description,cover_image,id,published_at} = blog
  return (
    <Link
     to={`/blog/${id}`}
      className="max-w-sm mx-auto group transition border-2 border-primary hover:border-secondary border-opacity-30  hover:scale-105 hover:no-underline focus:no-underline "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 "
        src={cover_image || NotFound}
      />
      <div className="p-6 space-y-2">
        
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
         {title}
        </h3>
        <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
        <p>
         {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogsCard;
