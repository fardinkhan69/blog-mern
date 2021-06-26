import React, { useEffect, useState } from "react";
import SidebarAdmin from "../sidebarAdmin/SidebarAdmin";
import "./Dashboard.css";

const Dashboard = () => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);


    const handleDelete = (event, id) => {
        console.log(id);
        const deleteProduct = event.target.parentNode.parentNode;



        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    deleteProduct.style.display = "none"
                }
            })
    }
  return (
    <>
    
    <div className="row">

      <SidebarAdmin></SidebarAdmin>
      <div className="col-md-8">
        <table class="table table-striped">
          <thead>
            <tr>
              
              <th scope="col">Blog Title</th>
              <th scope="col">Post Date</th>
              <th scope="col">Author</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                posts.map(post => (<tr>
                    <td>{post.title}</td>
                    <td>{post.date}</td>
                    <td>{post.author}</td>
                    <th scope="row"><button className="btn btn-primary" onClick={(event) => handleDelete(event, post._id)}>delete</button></th>
                    
                  </tr>))
            }


          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
