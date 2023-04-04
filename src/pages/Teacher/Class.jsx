import { useParams } from "react-router"
import { useState, useEffect } from "react"
import InfoCard from "../../components/InfoCard"
import Date from "../../components/Date";
export default function Class({ data, setPageTitle }) {
    const { classe } = useParams();
    const [currentClass, setCurrentClass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        for(const classObj of data.modules) {
            if(classe == classObj.name) {
                setCurrentClass(classObj);
                setPageTitle(classe);
                setIsLoading(false);
            }
        }
        setIsLoading(false);
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
                <div className="prev">précédent</div>
                <div className="class-name">
                    {currentClass.name}
                </div>
                <div className="next">suivant</div>
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
        </>
    )
}
