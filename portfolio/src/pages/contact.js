import React from "react";

export const Contact = () => {
  return (
    <div className="md:h-[80vh] w-2/3 mx-auto">
      <h1 className="text-2xl italic text-center text-gray-500 my-5">
        You can connect me via
      </h1>

      <form className="w-1/2 flex flex-col border p-3 rounded shadow-md mx-auto space-y-3">
        <div className="flex flex-col">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder="John doe"
            className="border outline-none p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            className="border outline-none p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Description</label>
          <textarea
            type
            className="border p-2 rounded"
            placeholder="We want to hire you for freelance work"
          />
        </div>
      </form>
    </div>
  );
};
