import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../Home/Sidebar/Sidebar'
const SingleBlog = () => {
  const { id } = useParams();
  console.log(id);
  const url = `https://warm-sea-49462.herokuapp.com/singleBlog/${id}`;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  const { _id, author, post, title, thumbnail } = posts;

  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="container">
              <img
                src={thumbnail}
                alt=""
                className="pb-4 rounded thumbnail img-fluid"
              />

              <h2>{title}</h2>

              <span className="date-time"></span>
              <div className="post-box">
                <p>{post}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <Sidebar></Sidebar>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
