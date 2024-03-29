import PropTypes from "prop-types";
import "./Post.css";

const Post = ({ firstName, lastName, writeup, image, avatar }) => {
  return (
    <div className="post-container">
      <div className="post">
        <img className="avatar" src={avatar} alt={`${firstName} ${lastName}`} />
        <div className="post-details">
          <h2>{`${firstName} ${lastName}`}</h2>
          <p>{writeup}</p>
        </div>
        <img className="post-image" src={image} alt="Post" />
      </div>
    </div>
  );
};
Post.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  writeup: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Post;
