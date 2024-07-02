import { useEffect, useState } from "react";
import Post from "../components/Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://codebuddy.review/posts");

      if (!response.ok) {
        alert("Failed to fetch data");
        throw new Error("Failed to fetch data");
      }
      const { data } = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      alert("Error while fetching posts.");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 border-b pb-2 text-4xl font-bold">Posts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {posts?.map((post) => (
            <Post key={post?.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
