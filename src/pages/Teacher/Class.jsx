import { useParams } from "react-router"
import { useState, useEffect } from "react"
import InfoCard from "../../components/InfoCard"
import Date from "../../components/Date"
import { ReactComponent as ArrowIcon } from "../../assets/icons/duplicate_arrows.svg"
import { Link } from "react-router-dom"
import CType from "../../components/CType"
import Marks from "../../components/Marks"
import Recours from "../../components/Recours"

export default function Class({ data, setPageTitle }) {
    const { classe } = useParams();
    const [currentClass, setCurrentClass] = useState(null);
    const [nextClass, setNextClass] = useState("");
    const [prevClass, setPrevClass] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [activeOption, setActiveOption] = useState("type");

    useEffect(() => {
        for(const classObj of data.modules) {
            if(classe == classObj.name) {
                setCurrentClass(classObj);
                setPageTitle(classe);
                setIsLoading(false);
            }
        }
        setIsLoading(false);
        const currentIndex = data.modules.indexOf(currentClass);
        // To get the next class object:
        const nextIndex = (currentIndex + 1) % data.modules.length;
        setNextClass(data.modules[nextIndex].name);
        // To get the previous class object:
        const prevIndex = (currentIndex - 1 + data.modules.length) % data.modules.length;
        setPrevClass(data.modules[prevIndex].name);
        return () => setPageTitle('Class inconnue');
    }, [classe]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!currentClass) {
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
            <div className="options">
                <div className={ `card type${activeOption === "type" ? " active" : ""}` } onClick={() => setActiveOption('type')} >Corrigé type</div>
                <div className={ `card note${activeOption === "note" ? " active" : ""}` } onClick={() => setActiveOption('note')} >Les Notes</div>
                <div className={ `card recour${activeOption === "recour" ? " active" : ""}` } onClick={() => setActiveOption('recour')} >Les Recours</div>
            </div>
            {
                activeOption === 'type' ? 
                    <CType /> 
                : activeOption === 'note' ?
                    <Marks />
                :
                    <Recours />
            }
        </>
    )
}
