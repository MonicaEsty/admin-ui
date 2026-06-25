import React from "react";

function Card({ title, desc, link = false }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl text-gray-400 font-light leading-none">
          {title}
        </h2>

        {link && (
          <a
            href={typeof link === "string" ? link : "#"}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            View All
          </a>
        )}
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-md px-6 py-4 overflow-hidden">
        <p className="text-xs text-gray-800 leading-5">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Card;