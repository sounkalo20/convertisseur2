

export default function Bouillon({temperature}){
   
    return(
                <div className="Bouillon">
                    <input type="text" className="zoneBoullon" id={temperature>=100?"boue":"bouePas"} placeholder="...." value={temperature>=100?"l'eau boue":"l'eau ne boue pas"} />
                </div>
    )
}