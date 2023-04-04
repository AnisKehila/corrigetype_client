import { ReactComponent as EtatIcon } from "../assets/icons/exclamation.svg"

export default function InfoCard({state = "Remplie", domain, speciality, module, niveau, prof, studentNum = 20, moyenneDeClass = 12.24, submitionDate = "12 - 02 - 2023"}) {
    return (
        <div className="info-card recour-row opened card">
            <h2>informations générales</h2>
            <div className={`etat${ state === "Remplie" ? " filled" : " non-filled"}`}>
                {/* Etat des notes needs to be modified when we get db here i've supposed thats the notes are filled*/}
                <div className="icon">
                    <EtatIcon />
                </div>
                <div className="txt">
                    <span className="txt-bold">
                        {state}
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
                            {domain}
                        </span>
                    </div>
                    <div>
                        <span className="property">
                            Spécialité:
                        </span>
                        <span className="value">
                            {speciality}
                        </span>
                    </div>

                    <div>
                        <span className="property">
                            Module:
                        </span>
                        <span className="value">
                            {module}
                        </span>
                    </div>

                    <div>
                        <span className="property">
                            Niveau:
                        </span>
                        <span className="value">
                            {niveau}
                        </span>
                    </div>
                    <div>
                        <span className="property">
                            Professor:
                        </span>
                        <span className="value">
                            {prof}
                        </span>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <span className="property">
                            Nombre d'étudiants:
                        </span>
                        <span className="value">
                            {studentNum}
                        </span>
                    </div>

                    <div>
                        <span className="property">
                            Submission Date:
                        </span>
                        <span className="value">
                            {submitionDate}
                        </span>
                    </div>
                    
                    <div>
                        <span className="property">
                            Moyenne de classe:
                        </span>
                        <span className="value">
                            {moyenneDeClass}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
