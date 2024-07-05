import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const Posts = () => {
  const [list, setList] = useState([])



  const getList = async () => {
    try {
      const response = await fetch('https://codebuddy.review/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      });
      const { data } = await response.json();
      setList(data)
    } catch (error) {
      setList([])
      console.log(error)
    }
  }

  useEffect(() => {
    getList().then(() => { }).catch(() => { })
  }, [])




  return (
    <div className="rounded-lg w-[98%] p-7 text-gray-900 shadow-lg">

      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"> 
        {list?.map(one => (

          <PostCard item={one} key={one.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
