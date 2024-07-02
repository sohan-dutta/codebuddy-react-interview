import { useState } from "react";

const Post = ({ post = {} }) => {
  const { image, avatar, firstName, lastName, writeup } = post;
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative">
        {loading && (
          <div className="absolute z-10 h-48 w-full bg-white pt-10 text-center">Loading...</div>
        )}

        <img
          src={image}
          alt={"Post Image"}
          loading="lazy"
          className="h-48 w-full object-cover"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="p-4">
        <div className="flex  items-center gap-2 border-b pb-2">
          <img src={avatar} alt="Author Avatar" className="h-10 w-10 rounded-full" />
          <p className="text-md font-semibold">
            {firstName} {lastName}
          </p>
        </div>
        <h2 className="my-2 text-xl font-semibold">{writeup}</h2>
      </div>
    </div>
  );
};

export default Post;
