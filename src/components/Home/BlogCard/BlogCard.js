import React from "react";
import './BlogCard.css';
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const {_id,title,post,userId,thumbnail} = props.details
  const shortDescription = post.slice(0,300);
  return (
    <div>
      
      <div class="post post-grid rounded bordered">
        <div class="thumb top-rounded">
          <a href="category.html" class="category-badge position-absolute">
            Lifestyle
          </a>
          
          <a href="blog-single.html">
            <div class="inner">
              <img src={thumbnail} alt="post-title" />
            </div>
          </a>
        </div>
        <div class="details">
          <ul class="meta list-inline mb-0">
            <li class="list-inline-item">
              <a href="#">
                <img
                  src="https://maanjaa.com/themeger/katen-demo/html/images/other/author-sm.png"
                  class="author"
                  alt="author"
                />
                Katen Doe
              </a>
            </li>
            <li class="list-inline-item">29 March 2021</li>
          </ul>
          <h5 class="post-title mb-3 mt-3">
           {title}
          </h5>
          <p class="excerpt mb-0">
         {shortDescription}
          </p>
         <Link className="btn btn-primary mt-3" to={`singleBlog/${_id}`}>Read More</Link>
         
        </div>
        <div class="post-bottom clearfix d-flex align-items-center">
          <div class="social-share me-auto">
            
            <ul class="icons list-unstyled list-inline mb-0">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-pinterest"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-telegram-plane"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="more-button float-end">
            <a href="blog-single.html">
              <span class="icon-options"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
