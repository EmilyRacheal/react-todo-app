import React from "react";
import "./header.css";
import { FaTimes } from "react-icons/fa";

const Index = () => {
  return (
    <div className="">
      <div className="py-20 text-center px-36 todo">
        <div className="bg-todo rounded-3xl drop-shadow-2xl">
          <h1 className="py-10 text-3xl font-bold text-white">
            <span className="px-3 pb-1 bg-black">My</span> Daily Tracker
          </h1>
          <div className="pt-5">
            <form>
              <input type="text" name="name" className="px-16 py-4 outline-0" />
              <input
                type="submit"
                value="Submit"
                className="py-4 text-white bg-black px-7"
              />
            </form>
          </div>
          <div className="px-56 py-20 text-left task">
            <div className="text-white bg-black">
              <div className="px-10 py-10">
                <ul className="flex items-center text-2xl list-disc space-x-28">
                  <li className="py-3">Hit the gym</li>
                  <a href="#">
                    <FaTimes />
                  </a>
                </ul>
                <ul className="flex items-center text-2xl list-disc space-x-28">
                  <li className="">Hit the gym</li>
                  <a href="#">
                    <FaTimes />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
