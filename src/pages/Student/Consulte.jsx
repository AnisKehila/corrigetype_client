import { useState,useEffect } from "react";
import { useParams } from "react-router"
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
        <div>Consulte</div>
    )
}
