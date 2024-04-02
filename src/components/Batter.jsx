
import { Link } from "react-router-dom"
export default function Batter({ batter }) {
    
    // const id = batter.url.split("/")[4]
    // console.log(id, "<< one per player")
    
    return (
        <div>
            <Link to={`/Batter_Info/${batter.id}`}>
                <h1>Batter {batter.full_name}</h1>
            </Link>
        </div>       
    ) 
}