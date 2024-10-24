import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-blue-400 p-4 m-4 rounded-lg">
            
            <h1>{title}</h1>
        </div>
    );
};
Bookmark.propTypes= {
    bookmark: PropTypes.array
}
export default Bookmark;