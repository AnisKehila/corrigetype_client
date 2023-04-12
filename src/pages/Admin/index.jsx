import { useState } from "react"
import { useLocation } from "react-router-dom"
import { USER_TYPES } from '../../data/Consts'
import NavBar from "../../components/navbar/NavBar"
import admin from "../../data/admin.json"
import Classes from "./Classes"
import Class from "./Class"
import Departement from "./Departement"
import Faculty from "./Faculty"
import NotFound from "../NotFound"
export function index({smallScreenSideBarToggler, SetSmallScreenSideBarToggler}) {
    const [pageTitle, setPageTitle] = useState('Classes');
    const location = useLocation().pathname;
    return (
            <div className="content">
                <NavBar user={teacher.name} notifications={teacher.notifications} module= {pageTitle} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler = {SetSmallScreenSideBarToggler}/>

                <main className="main">
                {  
                    admin.type === USER_TYPES.DEPARTEMENT && location =='/' ?
                        <Departement setPageTitle = {setPageTitle}/> :
                    admin.type === USER_TYPES.FACULTY && location =='/' ?
                        <Faculty setPageTitle = {setPageTitle}/> :
                    location =='/classes' ?
                        <Classes setPageTitle = {setPageTitle} data= {admin}/> :
                    location.includes('/classes/') ?
                        <Class setPageTitle = {setPageTitle} data= {admin}/> :
                    <NotFound />
                }
                </main>
            </div>
    )
}
