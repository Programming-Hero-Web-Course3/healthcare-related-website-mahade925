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
            {/* <h1 className="mb-5">Blogs</h1> */}
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    blogs?.map(blog => <>
                        <div class="col">
                            <div class="card">
                                <img src={blog.img} class="card-img-top h-100" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{blog.title}</h5>
                                    <p class="card-text">{blog.desc}</p>
                                    <button className="btn btn-info">Read More</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Blogs;