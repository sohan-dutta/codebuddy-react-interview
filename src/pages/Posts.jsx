import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../Components/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("https://codebuddy.review/posts");
      const value = await response.json();
      setPosts(value.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-5 text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2 inline" />
        <span>Back to Home</span>
      </Link>
      <div className="posts-grid">
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              firstName={post.firstName}
              lastName={post.lastName}
              writeup={post.writeup}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
      </div>
    </div>
  );
};

export default Posts;
