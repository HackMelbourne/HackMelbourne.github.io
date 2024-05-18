import { NavbarPillProps } from "./NavbarPillProps";
import { IconType } from "react-icons";

const NavbarPill = ({ title, desc, Icon, image } : NavbarPillProps) => {
  return (
    <div className="w-full flex gap-">
      <Icon className=""/>
    </div>
  )
}

export default NavbarPill;