import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PostItem = ({ item }) => {
  const { avatar, firstName, id, image, lastName, writeup } = item;
  return (
    <div className="rounded-lg bg-white p-7 shadow-lg">
      <div className="flex gap-4">
        <img className="h-8 w-8 rounded-md" src={avatar} />
        <h2 className="text-2xl font-bold">{firstName + " " + lastName}</h2>
      </div>
      <span className="text-xs">{id}</span>
      <p className="pb-2 text-gray-700">{writeup}</p>
      <img className="rounded-md" src={image} />
    </div>
  );
};

const Posts = () => {
  const [postArr, setPostArr] = useState([]);
  async function getPosts() {
    const data = await fetch("https://codebuddy.review/posts");
    const json = await data.json();
    setPostArr(json.data);
    console.log(json);
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {postArr.map((item) => (
          <PostItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Posts;