import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Blogs = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="my-5 container">
            <h1 className="mb-5">Blogs</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    blogs?.map(blog => <div key={blog.id}>
                        <div className="col">
                            <div className="card">
                                <img src={blog.img} className="card-img-top h-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.desc}</p>
                                    <button className="btn btn-info">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;