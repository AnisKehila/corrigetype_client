import { useLocation } from "react-router-dom"
import Ctype from "./Ctype"
import Recour from './Recour'
import NavBar from "../../components/navbar/NavBar"
import student from '../../data/student.json'
import { useState } from "react"
import Consulte from "./Consulte"
export function index({smallScreenSideBarToggler, SetSmallScreenSideBarToggler}) {
    const [module, setModule] = useState('Classes');
    const location = useLocation().pathname;
    return (
            <div className="content">
                <NavBar user={student.name} notifications={student.notifications} module= {module} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>
                <main className="main">
                    {
                        location =='/recours' ? <Recour /> : location =='/' ? <Ctype student= {student}/> : <Consulte setModule= {setModule}/> 
                    }
                </main>
            </div>
    )
}
