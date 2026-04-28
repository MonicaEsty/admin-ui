import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow w-64">

      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {name}
      </h2>

      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-sm text-gray-600 mb-3">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        onClick={() => setClicked(true)}
        className={`
          px-4 py-2 rounded-md mt-4 text-white transition-all duration-300
          ${
            clicked
            ? "bg-[#b83016] hover:bg-[#a12a13]"
            : "bg-gray-500 hover:bg-gray-400"
          }
        `}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>

    </div>
  );
}

export default UserCard;