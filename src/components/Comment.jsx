import React from "react";

const Comment = ({ data }) => {
  const { comment, name, replies } = data;
  return (
    <div className="flex gap-6 bg-gray-600 p-2 rounded-md mt-2">
      <img
        className="h-8"
        height="60"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="usericon"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
