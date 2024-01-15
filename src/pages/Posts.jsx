import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPostsList = async () => {
    const resp = await fetch("https://codebuddy.review/posts");
    resp.json().then(
      (res) => {
        setPosts(res.data);
      },
      (err) => {
        console.error("POSTS LIST FETCH ERROR:", err);
      },
    );
  };

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((obj) => (
          <div key={obj.id} className="rounded-lg bg-white p-7 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <div>
                Author: {obj.firstName} {obj.lastName}
              </div>
              <div>
                <img src={obj.avatar} className="w-6" />
              </div>
            </div>
            <p className="mb-3 text-gray-700">{obj.writeup}</p>
            <img src={obj.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
