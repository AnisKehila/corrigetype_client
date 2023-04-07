import { useState } from "react"
import { ReactComponent as ArrowIcon } from "../../assets/icons/left_to_right_arrow.svg"
import RecoursValidator from "./RecourValidator"
import recours from "../../data/recours.json"
export default function RecoursTable() {
    const [open, setOpen] = useState(false);
    const [recoursValidatorStudent, setRecoursValidatorStudent] = useState();
    return (
    <div className="table classes marks">
        <table>
            <thead>
                <tr>
                    <td>Nom</td>
                    <td>Matricule</td>
                    <td>Section</td>
                    <td>Groupe</td>
                    <td>Note</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    recours.map(row => 
                        <tr key={row.Matricule} className={open ? "opened" : ""}>
                            <td className="name">
                                <span>
                                    {row.Nom}
                                </span>
                                <span>
                                    {row.Email}
                                </span>
                            </td>
                            <td>{row.Matricule}</td>
                            <td>{row.Section}</td>
                            <td>{row.Groupe}</td>
                            <td>{row.Note}</td>
                            <td className="consult" onClick={() => {setOpen(true) ; setRecoursValidatorStudent(row)}}>
                                <span>
                                    Consulter
                                    <ArrowIcon />
                                </span>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        {recoursValidatorStudent ? <RecoursValidator student={recoursValidatorStudent} open={open} setOpen={setOpen}/> : ""}
    </div>
    )
}
