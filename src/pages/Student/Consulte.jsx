import { useState,useEffect } from "react"
import { useParams } from "react-router"
import Date from "../../components/Date"
import studentData from "../../data/student.json"
import InfoCard from "../../components/InfoCard"
import { USER_TYPES } from "../../data/Consts.js"
import Options from "../../components/Options"
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
            <InfoCard 
                domain= {studentData.domain}
                speciality= {studentData.speciality}
                module= {currentModule.module}
                niveau= {studentData.niveau}
                prof= {currentModule.prof}
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
            <Options userType={USER_TYPES.STUDENT}/>
        </>
    )
}
