import { Link } from "react-router-dom";
import { NavbarPillProps } from "./NavbarPillProps";

const NavbarPill = ({ title, desc, Icon, image, link } : NavbarPillProps) => {
  return (
      <Link to={link}>
        <div className="relative w-full flex gap-4 items-center justify-center px-3 py-4 mt-2 rounded-md border bg-center bg-cover bg-yellow-700/40 ">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <Icon className="relative w-8 h-8 z-10" />
            <div className="relative flex flex-col gap-1 z-10">
              <h3 className="font-semibold text-md">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
        </div>
      </Link>
  )
}

export default NavbarPill;