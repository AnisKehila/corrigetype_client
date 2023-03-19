import data from "../../data/student.json"
import RecourItem from "../../components/RecourItem";
export default function Recour() {
    const recours = data.recours;
    return (
        <>
            {
                recours.map(recour => 
                    <div key={Math.random()} className="recour-row opened">
                        <RecourItem
                            //in the key we can add the id when we get the db data  
                            module={recour.module}
                            prof={recour.prof}
                            subDate={recour.submission_date}
                            Objection={recour.objection_text}
                            justificatif={recour.justificatif}
                            etat={recour.etat}
                            oldNote={recour.old_note}
                            newNote={recour.new_note}
                        />
                    </div>
                )
            }
        </>
    )
}
