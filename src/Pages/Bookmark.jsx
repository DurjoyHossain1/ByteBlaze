import React, { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../Utils";
import BlogsCard from "../Components/BlogsCard";
import EmptyState from "../Components/EmptyState";

const Bookmark = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setblogs(storedBlogs);
  }, []);

  const handelDelete = id => {
    deleteBlogs(id)
    const storedBlogs = getBlogs();
    setblogs(storedBlogs);
  } 

  if (blogs.length < 1) {
    return <EmptyState massage='No Bookmark Avilable!' address={`/blog`} label={'Go To Blogs'}/>
  }
  return (
    <div  className=' px-4 sm:px-8 lg:px-12 py-8'>

    <div className='container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12'>
      <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogsCard handelDelete={handelDelete} deletable={true} key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Bookmark;
