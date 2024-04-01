
import { Link } from "react-router-dom"
export default function Team({ team }) {

    // const id = team.url.split("/")[4]
    // console.log(id, "<< one per id")

    return ( 
        <div>
            <Link to={`/teams/${id}`}>
                <h1>{team.team}</h1>
            </Link>
        </div>
    )
}
