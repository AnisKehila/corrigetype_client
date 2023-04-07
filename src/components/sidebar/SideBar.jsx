import { Outlet } from "react-router"
import Logo from "./Logo"
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg"
import SideBarLink from "./SideBarLink"
export default function SideBar({links}) {
    return (
        <>
            <div className="sidebar">
                <div className="content">
                    <Logo />
                    <ul className="links">
                        <li className="menu">
                            <MenuIcon />
                        </li>
                        {
                            links.map(link => 
                                <SideBarLink key={link.content} link={link} />
                            )
                        }
                    </ul>
                </div>
            </div>
            <Outlet />
        </>

    )
}
