import {ReactComponent as LogoImg} from '../assets/icons/Logo/logo.svg'
export default function Logo() {
    return (
        <div className='logo'>
            <LogoImg />
            <span className="line"></span>
            <div className="logo-content">
                <span className="faculty">Faculty Des Sciences</span>
                <span className="ent">ENT</span>
            </div>
        </div>
    )
}
