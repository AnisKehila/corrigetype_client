import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../assets/icons/left_to_right_arrow.svg"
export default function ModulsTable({classes}) {
    return (
        <div className="table classes">
            <table>
                <thead>
                    <tr>
                        <td >Module</td>
                        <td >Spécialité</td>
                        <td >Niveau</td>
                        <td >Nombre des étudiant</td>
                        <td >Etat</td>
                        <td ></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map(module => 
                            <tr key={module.name}>
                                <td id="name">{module.name}</td>
                                <td id="speciality"><span>{module.speciality.length > 34 ? `${module.speciality.slice(0,34)} ...` : module.speciality}</span></td>
                                <td id="level">{module.level}</td>
                                <td id="num">{module.studentsNumber}</td>
                                <td id="state"  className={`state${module.filled ? " active" : ""}`}>{module.filled ? "Remplie" : "Pas remplie"}</td>
                                <td id="link" className="consult">
                                    <span>
                                        <Link to={'/classes/' + module.name } >Voir Class</Link>
                                        <ArrowIcon />
                                    </span>
                                </td>
                            </tr>  
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
