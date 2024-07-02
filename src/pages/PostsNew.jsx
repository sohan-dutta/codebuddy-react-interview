import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const PostsNew = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const url = "https://codebuddy.review/posts";

    try {
      const resp = await fetch(url);
      console.log("resp", resp);
      const data = await resp.json();
      console.log("data", data?.data);
      if (data?.data?.length > 0) {
        setPosts(data?.data);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  // useEffect
  useEffect(() => {
    getPosts();
  }, []);

  console.log("bhava", posts);

  // view
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      {/** Posts  */}
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
        {posts?.length > 0 ? (
          posts?.map((post) => (
            <div className="rounded-lg bg-white p-7 shadow-lg" key={post?.id}>
              <img src={post?.image} alt="Post" className="mb-4 rounded-lg" />
              <div className="mb-4 flex items-center">
                <img src={post?.avatar} alt="Author" className="mr-2 h-10 w-10 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {post?.firstName} {post?.lastName}
                  </p>
                  <p className="text-gray-500">
                    Posted on {moment(post?.createdAt).format("DD MMM YYYY")}
                  </p>
                </div>
              </div>
              <h2 className="mb-2 text-xl font-bold">{post?.title}</h2>
              <p className="text-gray-700">{post?.writeup}</p>
            </div>
          ))
        ) : (
          <>
            <p className="text-center text-gray-500">Loading posts...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PostsNew;
