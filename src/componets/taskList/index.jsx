import React from "react";
import "./taskList.css";

const Index = () => {
  return (
    <div>
      <div className="px-56 py-20 text-left">
        <div className="bg-purple-500">
          <div className="px-10 py-10">
            <ul className="flex text-2xl list-disc ">
              <li className="py-3">Hit the gym</li>
              <span>+</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
