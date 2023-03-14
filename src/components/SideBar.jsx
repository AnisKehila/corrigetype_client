import Logo from "./Logo"
import SideBarLink from "./SideBarLink"
export default function SideBar({links, icons}) {
    return (
        <div className="sidebar">
            <Logo />
            <ul className="links">
            </ul>
        </div>
    )
}
