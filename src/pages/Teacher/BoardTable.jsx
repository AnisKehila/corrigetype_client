import data from "../../data/teacher.json"
import RatioCard from "../../components/RatioCard"
import Curve from "../../components/Curve";
import { ReactComponent as PercentIcon } from "../../assets/icons/percent.svg";
import { ReactComponent as HashtagIcon } from "../../assets/icons/hashtag.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/duplicate_arrows.svg";
import { Link } from "react-router-dom";
export default function BoardTable() {
  const modules = data.modules;
  const moduleCount = modules.length;
  const curveProps = [];
  let filledModules = 0;
  let totalRecours = 0;
  let revisedRecours = 0;
  let positiveRecours = 0;
  modules.map(module => {
    if (module.filled) {
      filledModules++;
      totalRecours += module.numberOfRecours;
      revisedRecours += module.revisedRecours;
      positiveRecours += module.positiveRecours;
      curveProps.push({property: module.name, propertyValue: module.numberOfRecours})
    }
  });
  const filledModulesRatio = Math.round((filledModules * 100 / moduleCount) * 10) / 10;
  const revisedModulesRatio = Math.round((revisedRecours * 100 / totalRecours) * 10) / 10;
  const positiveModulesRatio = Math.round((positiveRecours * 100 / revisedRecours) * 10) / 10;
  return (
    <>
      <div className="cards">
        <RatioCard 
          titleProp="Nombre de modules:"
          titleValue={moduleCount}
          ratio={filledModulesRatio}
          keys={{active: {text: "Remplie", color: "#6284FD"}, nonActive: {text: "Non Remplie", color: "#ECF0FF"}}}
        />
        <RatioCard 
          titleProp="Nombre de recours:"
          titleValue={totalRecours}
          ratio={revisedModulesRatio}
          keys={{active: {text: "Revu", color: "#6284FD"}, nonActive: {text: "En attente", color: "#ECF0FF"}}}
        />
        <RatioCard 
          titleProp="Recours révisés:"
          titleValue={revisedRecours}
          ratio={positiveModulesRatio}
          keys={{active: {text: "Favorable", color: "#3AC922"}, nonActive: {text: "Défavorable", color: "#F37B38"}}}
        />
      </div>
      <div className="curve-card card">
        <div className="card-header">
          <h3>Recours/Module</h3>
          <div className="icons">
            <span className="value active"><HashtagIcon /></span>
            <span className="ratio"><PercentIcon /></span>
          </div>
        </div>
        <Curve properties={curveProps} valuesRange={[0, 5, 10, 20, 50, 80]}/>
      </div>
      <div className="card unfinished-modules">
        <h3>Modules à finir</h3>
        <ul>
          {
            modules.map(module =>
              !module.filled && 
              <li key={module.name}>
                <div>
                  <div className="icon">
                    <NoteIcon />
                  </div>
                  <div className="content">
                    <div className="module-name">
                      {module.name}
                    </div>
                    <div className="students-num">
                      ({module.studentsNumber} Êtudiants)
                    </div>
                  </div>
                </div>
                <Link>
                  <span>
                    Voir la class
                  </span>
                    <ArrowIcon />
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}
