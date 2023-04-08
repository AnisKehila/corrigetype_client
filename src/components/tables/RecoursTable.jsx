import RecoursRow from "./RecoursRow"
import recours from "../../data/recours.json"
export default function RecoursTable() {
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
                        <RecoursRow  key={row.Matricule} student={row}/> 
                    )
                }
            </tbody>
        </table>
    </div>
    )
}
