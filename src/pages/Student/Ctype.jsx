import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import ModulsTable from "../../components/ModulsTable";

export default function Ctype({setModule, student}) {
    const [filteredModules, setFilteredModules] = useState(student.modules);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setFilteredModules(
            value.trim() != "" ? student.modules.filter((item) =>
                item.module.toLowerCase().match(value.toLowerCase())
            ) : student.modules
        );
    };
    
    const numOfModule = () => {
        const count = student.modules.length;
        return count < 10 ? `0${count}` : count;
    }
    return (
        <>
            <div className="title">
                <span className="txt">Liste des Modules</span>
                <span className="num">{numOfModule()}</span>
            </div>
            <div className="search">
                <SearchIcon />
                <input type="text" placeholder="recherche par module" onChange={handleSearchChange}/>
            </div>
            <ModulsTable modules={filteredModules}/>
        </>
    )
    }

















