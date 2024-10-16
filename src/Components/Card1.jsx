import React from "react";

function Card1({ values, handle }) {
  const { name, image, profession, friends } = values;

  return (
    <div className="w-52 bg-zinc-200 rounded-md">
      <div className="w-full h-32 bg-sky-200 rounded-md">
        <img
          className="w-full h-full object-cover object-[center-top] overflow-hidden"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={handle}
          className={`mt-4 px-3 py-1 text-xs text-white ${!friends ? "bg-green-600" : "bg-blue-500"} font-semibold rounded-md`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Card1;
