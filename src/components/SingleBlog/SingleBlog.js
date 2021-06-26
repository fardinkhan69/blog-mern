import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {

    const {id} = useParams();
    console.log(id)
    const url = `http://localhost:5000/singleBlog/${id}`;
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    })

    const {_id,author,post,title,thumbnail}= posts;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <img src={thumbnail} alt="" className="thumbnail img-fluid" />

                            <h2>{title}</h2>

                            <span className="date-time">

                            </span>


                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <p>{post}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;