import { Link } from "react-router-dom";
import { NavbarPillProps } from "./NavbarPillProps";
import { IconType } from "react-icons";

const NavbarPill = ({ title, desc, Icon, image, link } : NavbarPillProps) => {
  return (
    <Link to={link}>
      <div className="w-full flex gap-4 items-center justify-center px-3 py-4 mt-2 rounded-md border border-white bg-neutral-500">
          { /*<img src={image} className="w-full h-full relative"/> */}
          <Icon className="w-8 h-8 "/>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-[10px]">{desc}</p>
          </div>
      </div>
    </Link>
  )
}

export default NavbarPill;