
import { Link } from "react-router-dom"
export default function Team({ team }) {

    // const id = team.url.split("/")[4]
    // console.log(team, "<< one per id")

    return ( 
        <div>
            <Link to={`/teams/${team.id}`}>
                <h1>{team.Team}</h1>
            </Link>
        </div>
    )
}
