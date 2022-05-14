import React from "react";
import "./header.css";
// import BiArchiveIn from "react-icons/bi";

const Index = () => {
  return (
    <div className="bg-black">
      <div className="py-20 text-center px-36 todo">
        <div className="bg-purple-500">
          <h1 className="py-10 text-3xl text-white">My Daily Tracker</h1>
          <div className="pt-5 pb-16">
            <form>
              <input type="text" name="name" className="px-16 py-4" />
              <input
                type="submit"
                value="Submit"
                className="py-4 text-white bg-black px-7"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
