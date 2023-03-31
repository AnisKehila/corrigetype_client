import { ReactComponent as ParamsIcon } from "../../assets/icons/params.svg"
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg"
import { ReactComponent as LogOutIcon } from "../../assets/icons/left-to-right-with-bar.svg"
import { useRef, useEffect } from "react"
export default function UserParams({ userRef, paramsToggle, setParamsToggle }) {
    const paramsRef = useRef(null);
    useEffect(() => {
        function handleClick(event) {
            if(userRef.current && paramsRef.current && !paramsRef.current.contains(event.target) && !userRef.current.contains(event.target)) {
                setParamsToggle(false)
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => {document.removeEventListener('mousedown', handleClick)};
    },[userRef]);
    return (
        <ul className={`user-parameters ${paramsToggle ? "active" : ""}`} ref={paramsRef}>
            <li>
                <UserIcon />
                Profile
            </li>
            <li>
                <ParamsIcon />
                Parameters
            </li>
            <li>
                <LogOutIcon />
                Déconnexion
            </li>
        </ul>
    )
}
