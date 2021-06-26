import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarAdmin.css'
const SidebarAdmin = () => {
    return (
        <>
        <div className="col-md-4 sidebar-bg">
            <div className="sidebar">
                <div className="row">
                    <div className="col">
                        <h2>Blog</h2>
                        <ul className="sidebar-menu">
                            <div>
                                <Link style={{ color: '#fff', textDecoration: 'none' }} to='/dashboard'>  <li>All Post </li></Link>
                                <Link style={{ color: '#fff', textDecoration: 'none' }} to='/createPost'>  <li>Create Post</li></Link>
                                
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SidebarAdmin;