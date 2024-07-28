import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="port-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img src="" className="w-12 lg:h-12 rounded-full" />
          </Link>
          <div className="flex flex-col">
            <p className="subtle-semibold lg:small-regular">
              12-32-41 12:21:13
            </p>
            •<p className="subtitle-semibold lg:small-regular">Ha Noi</p>
          </div>
        </div>

        <Link to={``} className={"hidden"}>
          <img src={""} alt="edit" width={20} height={20} />
        </Link>
      </div>

      <Link to={"/"}>
        <div className="small-medium lg:base-medium py-5">
          <p>Hello Word</p>
          <ul className="flex gap-1 mt-2">
            <li className="text-light-3 small-regular">#football</li>
          </ul>
        </div>

        <img src={""} alt="post image" className="post-card_img" />
      </Link>
    </div>
  );
};

export default PostCard;
