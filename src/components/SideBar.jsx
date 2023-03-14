import { Outlet } from "react-router"
import Logo from "./Logo"
import SideBarLink from "./SideBarLink"
export default function SideBar({links}) {
    return (
        <>
            <div className="sidebar">
                <Logo />
                <ul className="links">
                    {
                        links.map(link => 
                            <SideBarLink key={link.content} link={link} />
                        )
                    }
                </ul>
            </div>
            <Outlet />
        </>

    )
}
