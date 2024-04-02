
// Import our Team Component
// import Batter from "../components/Batter"
import Team from "../components/Team"
import { Form, useLoaderData } from "react-router-dom"


export default function Index(props) {
    const allTeams = useLoaderData()

    return (
        <>
            <h1>MLB Teams</h1>
            <Form action="/create" method="post">

            </Form>



            <hr/>
            { allTeams.map((team, i) => <Team team={team} key={i}/>)}
        </>
    )
}