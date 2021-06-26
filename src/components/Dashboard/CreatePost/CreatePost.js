import React from 'react';
import SidebarAdmin  from '../sidebarAdmin/SidebarAdmin'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const CreatePost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imgURL, setImgURL] = useState(null);


    const onSubmit = (data, e) => {
        const blogData = {
            author: data.author,
            title: data.title,
            thumbnail: imgURL,
            date: data.date,
            post: data.post


        }
        const url = `http://localhost:5000/createPost`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
        .then(res => console.log(res))
        console.log(blogData);
        e.target.reset();
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b4d26ff9fdc7ca22b41ee19941cfbede');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <div className="row">
                <SidebarAdmin></SidebarAdmin>
                <div className="col-md-8 p-5 bg-light">
                        <div className="row">
                            <div className="col mt-5">
                                <h3 className="text-left">Give us a Testimoial</h3>
                            </div>
                        </div>
                        <div className="row mt-5 p-2">
                            <div className="col bg-white p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col">
                                        <label for="author" class="form-label">Your Name</label>
                                        <input className="form-control p-2 my-2" type="text" placeholder="name" {...register("author", { required: true })} />
                                        <label for="product-name" class="form-label">from</label>
                                        <input className="form-control p-2 my-2" type="date" placeholder="from" {...register("date", { required: true })} />

                                    </div>
                                    <div className="col">
                                        <label for="image" class="form-label"> Upload Image</label>
                                        <input id="thumbnail" className="form-control" type="file" placeholder="photo" name="photo" onChange={handleImageUpload} />
                                        <label for="post" class="form-label">Title</label>
                                        <input id="title" className="form-control" type="text" {...register("title", { required: true })} />
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <label for="post" class="form-label">Post</label>
                                        <textarea className="form-control" {...register("post", { required: true })} />
                                        </div>
                                    </div>







                                    <input className="btn btn-primary w-50 mt-5" type="submit" />
                                </form>

                            </div>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default CreatePost;