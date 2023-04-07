import { useState } from "react"
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../assets/icons/left_to_right_arrow.svg"
import RecourForm from "../RecourForm"
export default function ModulsTable({modules}) {
    const [formToggle, setFormToggle] = useState(false);
    const [currentModule, setCurrentModule] = useState('');

    const openForm = (item) => {
        setFormToggle(() => !formToggle ? true : false);
        setCurrentModule(item.module);
    };
    return (
        <>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <td>Module</td>
                            <td>Professor</td>
                            <td>Ma Note</td>
                            <td>Corrigé type</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            modules.map(item => 
                                <tr key={item.module}>
                                    <td>{item.module}</td>
                                    <td>{item.prof}</td>
                                    <td>{item.note}</td>
                                    <td className="consult">
                                        <span>
                                            <Link to={'/consulter/' + item.module} >Consulter</Link>
                                        </span>
                                    </td>
                                    <td className={`recourBtn ${item.hasRecour ? '' : 'active'}`} >
                                        <span onClick={() => item.hasRecour ? null : openForm(item)}>
                                            {item.hasRecour ? `Envoyé` : `Recours`} <ArrowIcon />
                                        </span>
                                    </td>
                                </tr>  
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className={`recour-form${formToggle ? " active" : ''}`} >
                <RecourForm setFormToggle = {setFormToggle} currentModule={currentModule}/>
            </div>
        </>
    )
}
