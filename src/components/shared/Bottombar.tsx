import { bottombarLinks } from "@/constants/lists/list";
import { INavLink } from "@/types/object";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((item: INavLink) => {
        const isActive = pathname === item.route;
        return (
          <Link
            to={item.route}
            key={`bottombar-${item.label}`}
            className={`${
              isActive && "rounded-[10px] bg-primary-500"
            } flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={item.imgURL}
              alt={item.label}
              width={16}
              height={16}
              className={`${isActive} && "invert-white`}
            />
            <p className="tiny-medium text-light-2">{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
