import RatioCard from "../../components/RatioCard"
export default function BoardTable() {
  return (
    <>
      <div className="cards">
        <RatioCard 
          titleProp="Nombre de modules:"
          titleValue="6"
          ratio="90"
          keys={["Remplie", "Non Remplies"]}
        />
        <RatioCard 
          titleProp="Nombre de modules:"
          titleValue="6"
          ratio="90"
          keys={["Remplie", "Non Remplies"]}
        />
        <RatioCard 
          titleProp="Nombre de modules:"
          titleValue="6"
          ratio="90"
          keys={["Remplie", "Non Remplies"]}
        />
      </div>
    </>
  )
}
