import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export interface HeaderItem {
  link: string;
  title: string;
}

export default function Header() {
  const menuItems: HeaderItem[] = [
    {
      title: "Photos",
      link: "/photos",
    },
    {
      title: "Posts",
      link: "/posts",
    },
    {
      title: "Todo",
      link: "/todo",
    },
  ];

  useEffect(() => {});

  return (
    <header className="backdrop-blur backdrop-opacity-100 absolute bg-slate-100/75 leading-[60px] min-h-[60px] left-0 right-0 top-0 flex items-center">
      {/* Menu item */}
      <div className="flex mx-auto justify-around items-center w-full">
        {menuItems.map((item) => {
          return (
            <NavLink
              key={item.link}
              className=" hover:bg-slate-300 mx-2 rounded-md transition-all"
              to={item.link}
            >
              <div className="leading-[38px] px-6 py-1">{item.title}</div>
            </NavLink>
          );
        })}
      </div>
      {/*  */}
    </header>
  );
}
