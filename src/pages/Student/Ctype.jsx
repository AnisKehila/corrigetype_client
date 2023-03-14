import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
export default function Ctype({setModule, student}) {
    const [searchValue, setSearchValue] = useState('');
    const [filteredModules, setFilteredModules] = useState(student.modules);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 8) {
                console.log('h')
                setFilteredModules(()=> student.modules);
            }
        };
        setFilteredModules(() => 
            filteredModules.filter((item) =>
                item.module.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [searchValue]);
    const numOfModule = () => {
        let i = 0;
        student.modules.map(module => i++);
        return i < 10 ? `0${i}`: i;
    }
    console.log(filteredModules)
    return (
        <>
            <div className="title">
                <span className="txt">Liste des Modules</span>
                <span className="num">{numOfModule()}</span>
            </div>
            <div className="search">
                <SearchIcon />
                <input type="text" placeholder="recherche par module" value={searchValue} onChange={handleSearchChange}/>
            </div>
        </>
    )
}
