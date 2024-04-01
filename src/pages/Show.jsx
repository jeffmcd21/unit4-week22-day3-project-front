
// Import our Team Component
import { Link, useLoaderData } from "react-router-dom"
export default function Show(props) {

    const aTeam = useLoaderData()

    return (
        <div>
            <h1>{aTeam.team}</h1>
            <h2>{aTeam.division}</h2>
            <Link to={"/"}>
                <button>Back to Home</button>
            </Link>
        </div>
    )
}