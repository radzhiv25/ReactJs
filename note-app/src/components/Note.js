import React from "react";

export const Note = (props) => {
  return (
    <div className="h-max mt-10 border hover:shadow-md md:w-60 w-auto p-3 rounded-md hover:scale-105">
      <h1 className="pb-2 text-xl font-semibold border-b">
        {props.title}
      </h1>
      <p className="font-medum">
        {props.noteContent}
      </p>
      <button className="mt-5 p-1 bg-red-400 font-medium text-white text-sm rounded-sm hover:bg-red-500" onClick={() => props.onDelete(props.id)}>
        delete
      </button>
    </div>
  );
};
