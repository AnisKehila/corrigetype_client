import { useState, useEffect } from "react"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import ClassesTable from "../../components/tables/ClassesTable"
export default function Classes({setPageTitle, data}) {
    useEffect(() => {
        setPageTitle('Classes');
    }, [])
    const [filteredModules, setFilteredModules] = useState(data.modules);
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setFilteredModules(
            value.trim() != "" ? data.modules.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.speciality.toLowerCase().includes(value.toLowerCase()) ||
                item.level.includes(value.toLowerCase())
            ) : data.modules
        );
    };
    const numOfClasses = () => {
        const count = data.modules.length;
        return count < 10 ? `0${count}` : count;
    }
    return (
        <>
            <div className="title">
                <span className="txt">Liste des Classes</span>
                <span className="num">{numOfClasses()} Classes</span>
            </div>
            <div className="search" id="teacher-search">
                <SearchIcon />
                <input type="text" placeholder="recherche par module, spécialité, niveau." onChange={handleSearchChange}/>
            </div>
            <ClassesTable classes={filteredModules}/>
        </>
    )
}
