import React from "react";

export const ExpCard = (props) => {
  return (
    <div className="border p-3 w-2/3 mx-auto rounded">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{props.companyName}</h1>
        <p>{props.duration}</p>
      </div>
      <h2 className="text-xl">{props.role}</h2>
      <p>{props.desc}</p>
    </div>
  );
};
