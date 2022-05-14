import React from "react";
import "./header.css";
// import BiArchiveIn from "react-icons/bi";

const Index = () => {
  return (
    <div className="">
      <div className="py-20 text-center px-36 todo">
        <div className="bg-black rounded-3xl drop-shadow-2xl">
          <h1 className="py-10 text-3xl font-bold text-white">
            <span className="px-3 pb-1 bg-purple-500">My</span> Daily Tracker
          </h1>
          <div className="pt-5 pb-16">
            <form>
              <input type="text" name="name" className="px-16 py-4 outline-0" />
              <input
                type="submit"
                value="Submit"
                className="py-4 text-white bg-purple-500 px-7"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
