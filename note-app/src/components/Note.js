import React from "react";
import { BsBookmarkStarFill } from 'react-icons/bs'

export const Note = (props) => {
  return (
    <div className="h-max mt-10 border hover:shadow-md md:w-60 w-auto p-3 rounded-md hover:scale-105">
      <h1 className="pb-2 text-xl font-semibold border-b">
        {props.title}
      </h1>
      <p className="font-medum">
        {props.noteContent}
      </p>
      <div className="flex items-center justify-between">
      <button className="mt-5 p-1 bg-red-500 font-medium text-white text-sm rounded-sm" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
        <BsBookmarkStarFill className="relative top-3 hover:text-yellow-400"/>
      </div>
    </div>
  );
};
