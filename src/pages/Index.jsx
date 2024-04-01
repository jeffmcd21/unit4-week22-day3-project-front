
// Import our Team Component
// import Batter from "../components/Batter"
import Team from "../components/Team"
import { useLoaderData } from "react-router-dom"


export default function Index(props) {
    const allTeams = useLoaderData()

    return (
        <>
            <h1>Index</h1>
            <hr/>
            { allTeams.map((team, i) => <Team team={team} key={i}/>)}
        </>
    )
}