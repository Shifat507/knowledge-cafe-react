import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="ml-4">
            <h2 className="text-2xl font-bold m-4">Total Reading Time: {readingTime}</h2>
            <h2 className="text-2xl font-semibold">Bookmarks</h2>
            <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks: PropTypes.array
}

export default Bookmarks;