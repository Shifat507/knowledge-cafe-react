import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-2xl font-semibold">Blogs: {blogs.length}</h2>
            <div>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleMarkAsRead = {handleMarkAsRead}
                        ></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes ={
    handleBookmark: PropTypes.func
}
export default Blogs;