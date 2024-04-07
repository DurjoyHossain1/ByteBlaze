import React from "react";
import { useLoaderData } from "react-router-dom";
import NotFound from "../assets/404.jpg";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
  const blog = useLoaderData();
  const { title, description,body_html, cover_image, id, published_at, tags } = blog;
  console.log(blog);
  return (
    <div className=" mx-auto group  border-2  p-2 border-opacity-30   hover:no-underline focus:no-underline ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44  mb-6"
        src={cover_image || NotFound}
      />
      {tags.map( (tag,index) => (
        <a
        key={index}
          rel="noopener noreferrer"
          href="#"
          className="px-3 py-1 rounded-sm hover:underline  "
        >
          #{tag}
        </a>
      ))}
      <div className=" space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline">{title}</h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
