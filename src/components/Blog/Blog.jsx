import PropTypes from "prop-types";
import { FaBookBookmark } from "react-icons/fa6";
const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-20">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between px-4 py-2">
                <div className="flex gap-4">
                    <img className="w-12" src={author_img} alt="" />
                    <div>
                        <h3 className="text-sm font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div><p>{reading_time} min read </p></div>
                    <div><button onClick={()=>handleBookmark(blog)} className="text-xl"><FaBookBookmark /></button></div>
                </div>
            </div>
             
            <h1 className="text-3xl font-bold mt-2">{title}</h1>
            <div>
                {
                    hashtags.map(tag => <span key={tag.id}> <a href="">#{tag}</a></span>)
                }
             </div>
             <button onClick={()=>handleMarkAsRead(reading_time, id)} className="text-purple-800 font-bold">Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    id: PropTypes.number
}
export default Blog;