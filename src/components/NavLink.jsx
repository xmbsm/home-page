import React from "react";

const NavLink = React.memo(({ name, onClick }) => {
  return (
    <li
      className="relative px-1 py-[1px] cursor-pointer list-none"
      onClick={onClick}
    >
      <span className="text-sm font-medium text-white">{name}</span>
    </li>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;