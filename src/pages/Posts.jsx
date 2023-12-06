import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-7 shadow-lg">
          <h2 className="text-2xl font-bold">Post 1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem, quibusdam,
            quos, voluptatum voluptas quod quas voluptates quia doloribus nobis voluptatibus. Quam,
            voluptate voluptatum. Quod, voluptate? Quisquam, voluptate voluptatum.
          </p>
        </div>
        <div className="rounded-lg bg-white p-7 shadow-lg">
          <h2 className="text-2xl font-bold">Post 2</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem, quibusdam,
            quos, voluptatum voluptas quod quas voluptates quia doloribus nobis voluptatibus. Quam,
            voluptate voluptatum. Quod, voluptate? Quisquam, voluptate voluptatum.
          </p>
        </div>
        <div className="rounded-lg bg-white p-7 shadow-lg">
          <h2 className="text-2xl font-bold">Post 3</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem, quibusdam,
            quos, voluptatum voluptas quod quas voluptates quia doloribus nobis voluptatibus. Quam,
            voluptate voluptatum. Quod, voluptate? Quisquam, voluptate voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
