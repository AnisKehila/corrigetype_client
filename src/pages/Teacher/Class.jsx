import { useParams } from "react-router"
import { useState, useEffect } from "react"
import InfoCard from "../../components/InfoCard"
import Date from "../../components/Date"
import { ReactComponent as ArrowIcon } from "../../assets/icons/duplicate_arrows.svg"
import { Link } from "react-router-dom"
import Options from "../../components/Options"
import { USER_TYPES } from "../../data/Consts"
export default function Class({ data, setPageTitle }) {
    const { classe } = useParams();
    const [currentClass, setCurrentClass] = useState(null);
    const [nextClass, setNextClass] = useState(null);
    const [prevClass, setPrevClass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const classIndex = data.modules.findIndex((classObj) => classObj.name === classe);
        setCurrentClass(data.modules[classIndex]);
        setPageTitle(classe);
        setIsLoading(false);
        // Find the previous class
        if (classIndex > 0) {
            setPrevClass(data.modules[classIndex - 1].name);
        } else {
            setPrevClass(prevClass);
        }
    
        // Find the next class
        if (classIndex < data.modules.length - 1) {
            setNextClass(data.modules[classIndex + 1].name);
        } else {
            setNextClass(nextClass);
        }
    }, [classe]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!currentClass) {
        setPageTitle('Class inconnue');
        return (
            <div className="unavailable">
                Nous n'avons pas pu trouver la classe que vous recherchez.
            </div>
        );
    }
    return (
        <>
            <div className="class-container">
                <Link className="prev" to={"/classes/" + prevClass}>
                    <ArrowIcon />
                    Précédent 
                </Link>
                <div className="class-name">
                    {currentClass.name}
                </div>
                <Link className="next" to={"/classes/" + nextClass}>
                    Suivant
                    <ArrowIcon />
                </Link>
            </div>
            <InfoCard 
                state={currentClass.filled ? "Remplie" : "Pas remplie"}
                domain={currentClass.domain}
                speciality={currentClass.speciality}
                module={currentClass.name}
                niveau={currentClass.level}
                prof={data.name}
                studentNum={currentClass.studentsNumber}
            />
            <div className="timing card">
                <h2>
                    Période de temps
                </h2>
                <div className="content">
                    <div>
                        <h3>téléchargement de corrigé type :</h3>
                        <div className="dates">
                            <Date date="06 - 03 - 2023 " content="date de début" />
                            <Date date="06 - 03 - 2023 " content="date d'échéance" />
                        </div>
                    </div>
                    <div>
                        <h3>envoi de recours :</h3>
                        <div className="dates ">
                            <Date date="06 - 03 - 2023 " content="date de début" />
                            <Date date="06 - 03 - 2023 " content="date d'échéance" />
                        </div>
                    </div>
                </div>
            </div>
            <Options userType={USER_TYPES.TEACHER}/>
        </>
    )
}
