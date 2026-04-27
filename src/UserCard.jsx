import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  console.log(Object.entries(rest));

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow w-64">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {name}
      </h2>

      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-sm text-gray-600 mb-3 whitespace-nowrap">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>
      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        className={`${clicked ? "bg-green-500" : "bg-gray-500"} text-white p-2 rounded-md text-xs`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;