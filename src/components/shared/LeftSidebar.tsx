import { sidebarLinks } from "@/constants/lists/list";
import { INavLink, IUser } from "@/types/object";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const meInfo: IUser = useSelector((state: any) => state.userReducer.info);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="public/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link to="" className="flex gap-3 items-center">
          <img
            src="public/assets/icons/profile-placeholder.svg"
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{"Name"}</p>
            <p className="small-regular text-light-3">{"@username"}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((item: INavLink) => {
            const isActive = pathname === item.route;
            return (
              <li
                key={item.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={item.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={item.imgURL}
                    alt={item.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button variant="ghost" className="shad-button_ghost" onClick={() => {}}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
