import { useLocation } from "react-router-dom"
import { useState } from "react"
import NavBar from "../../components/navbar/NavBar"
import BoardTable from "./BoardTable"
import Classes from "./Classes"
import Class from "./Class"
import teacher from '../../data/teacher.json'
import NotFound from "../NotFound"

export function index() {
    const [pageTitle, setPageTitle] = useState('Tableau de bord');
    const location = useLocation().pathname;
    return (
            <div className="content">
                <NavBar user={teacher.name} notifications={teacher.notifications} module= {pageTitle}/>
                <main className="main">
                    {
                        location =='/' ? <BoardTable /> : location =='/classes' ? <Classes setPageTitle = {setPageTitle} teacher= {teacher}/> : location.includes('/classes/') ? <Class setPageTitle = {setPageTitle} teacher= {teacher}/> : <NotFound />
                    }
                </main>
            </div>
    )
}
