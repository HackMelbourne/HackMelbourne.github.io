import { Link } from "react-router-dom";
import { NavbarPillProps } from "./NavbarPillProps";
import { IconType } from "react-icons";

const NavbarPill = ({ title, desc, Icon, image, link } : NavbarPillProps) => {
  return (
    <Link to={link}>
      <div className="w-full flex gap-4 items-center justify-center px-3 py-4 mt-2 rounded-md border border-white bg-neutral-500">
          <Icon className=" w-8 h-8 "/>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold ">{title}</h3>
            <p className=" text-xs  ">{desc}</p>
          </div>
      </div>
    </Link>
  )
}

export default NavbarPill;