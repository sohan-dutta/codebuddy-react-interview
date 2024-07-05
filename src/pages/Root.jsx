import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-tr from-[#FBAB7E] to-[#F7CE68]  py-6 text-black">
      <div className="container mx-auto flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
