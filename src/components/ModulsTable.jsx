import { useState,useEffect, useRef } from "react"
import { ReactComponent as ArrowIcon } from "../assets/icons/left_to_right_arrow.svg"
import RecourForm from "./RecourForm"
export default function ModulsTable({modules}) {
    const [formToggle, setFormToggle] = useState(false);
    const formRef = useRef(null)
    useEffect(() => {
        const removeForm = (event) => {
            if(formRef.current && !formRef.current.contains(event.target)) {
                setFormToggle(false);
            }
        }
        document.addEventListener('mousedown', removeForm);
        return () => {
            document.removeEventListener('mousedown', removeForm);
        };
    }, [formToggle]);
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
                                            Consulter
                                        </span>
                                    </td>
                                    <td className={`recourBtn ${item.hasRecour ? '' : 'active'}`} onClick={() => item.hasRecour ? null : setFormToggle(() => !formToggle ? true : false)}>
                                        <span>
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
                <RecourForm refe={formRef}/>
            </div>
        </>
    )
}
