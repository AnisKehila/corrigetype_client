import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { ReactComponent as EtatIcon } from "../../assets/icons/exclamation.svg"
import { ReactComponent as DateIcon } from "../../assets/icons/date.svg"
import Date from "../../components/Date"
import studentData from "../../data/student.json"

export default function Consulte({setModule}) {
    const { module } = useParams();
    const [currentModule, setCurrentModule] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        for(const moduleObj of studentData.modules) {
            if(module == moduleObj.module) {
                setCurrentModule(moduleObj);
                setModule(module);
                setIsLoading(false);
            }
        }
        setIsLoading(false);
        return () => setModule('Classes')
    }, [module]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!currentModule) {
        return (
            <div className="unavailable">
                Nous n'avons pas pu trouver le module que vous recherchez.
            </div>
        );
    }
    return (
        <>
            <div className="info-card recour-row opened card">
                <h2>informations générales</h2>
                <div className="etat filled">
                    {/* Etat des notes needs to be modified when we get db here i've supposed thats the notes are filled*/}
                    <div className="icon">
                        <EtatIcon />
                    </div>
                    <div className="txt">
                        <span className="txt-bold">
                            remplié
                        </span>
                        <span>
                            État Des notes
                        </span>
                    </div>
                </div>
                <div className="content">
                    <div className="col">
                        <div>
                            <span className="property">
                                Domain:
                            </span>
                            <span className="value">
                                {studentData.domain}
                            </span>
                        </div>

                        <div>
                            <span className="property">
                                Spécialité:
                            </span>
                            <span className="value">
                                {studentData.speciality}
                            </span>
                        </div>

                        <div>
                            <span className="property">
                                Module:
                            </span>
                            <span className="value">
                                {currentModule.module}
                            </span>
                        </div>

                        <div>
                            <span className="property">
                                Niveau:
                            </span>
                            <span className="value">
                                {studentData.niveau}
                            </span>
                        </div>
                        <div>
                            <span className="property">
                                Professor:
                            </span>
                            <span className="value">
                                {currentModule.prof}
                            </span>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <span className="property">
                                Nombre d'étudiants:
                            </span>
                            <span className="value">
                                20
                            </span>
                        </div>

                        <div>
                            <span className="property">
                                Submission Date:
                            </span>
                            <span className="value">
                                06 - 03 - 2023
                            </span>
                        </div>
                        
                        <div>
                            <span className="property">
                                Moyenne de classe:
                            </span>
                            <span className="value">
                                12.37
                            </span>
                        </div>
                    </div>
                </div>
            </div>
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
