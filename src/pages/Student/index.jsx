import { useLocation } from "react-router-dom"
import Ctype from "./Ctype"
import Recour from './Recour'
import NavBar from "../../components/NavBar"
import student from '../../data/student.json'
import { useState } from "react"
export function index() {
    const [module, setModule] = useState('Classes');
    const location = useLocation().pathname;
    return (
            <div className="content">
                <NavBar user={student.name} notifications={student.notifications} module= {module}/>
                <main className="main">
                    {
                        location =='/recours' ? <Recour /> : <Ctype setModule= {setModule} student= {student}/>
                    }
                </main>
            </div>
    )
}
