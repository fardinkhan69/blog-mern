import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import Sidebar from "../Sidebar/Sidebar";
const BlogCase = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://warm-sea-49462.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const newPostArray = posts.slice(0, 15);
  console.log(newPostArray);

  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {newPostArray.map((post) => (
                <div className="col-md-6">
                  <BlogCard key={post._id} details={post}></BlogCard>
                </div>
              ))}
              
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCase;
