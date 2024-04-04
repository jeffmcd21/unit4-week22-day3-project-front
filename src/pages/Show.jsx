
// Import our Team Component
import { Link, useLoaderData, Form } from "react-router-dom"
export default function Show() {
    const aTeam = useLoaderData()
    // const id = aTeam?.url,split("/")[4]

    return (
        <div>
            <h1>{aTeam.Team}</h1>
            <h2>{aTeam.League}</h2>
            <h2>{aTeam.Division}</h2>

            <div>
                <Form action={`/update/${aTeam.id}/`} method="POST">
                <label htmlFor="Sport">
                    <input type="text" name="Sport" id="Sport" placeholder="Sport" defaultValue={"Major League Baseball"}/>
                </label>

                <label htmlFor="Sport_Short_Description">
                    <input type="text" name="Sport_Short_Description" id="Sport_Short_Description" placeholder="Sport_Short_Description" defaultValue={"MLB"}/>
                </label>

                <label htmlFor="Team">
                    <input type="text" name="Team" id="Team" placeholder="Team" />
                </label>

                <label htmlFor="League">
                    <input type="text" name="League" id="League" placeholder="League"/>
                </label>

                <label htmlFor="League_Division">
                    <input type="text" name="League_Division" id="League_Division" placeholder="League_Division" />
                </label>

                <label htmlFor="League_Short_Description">
                    <input type="text" name="League_Short_Description" id="League_Short_Description" placeholder="League_Short_Description" />
                </label>

                <label htmlFor="Division">
                    <input type="text" name="Division" id="Division" placeholder="Division" />
                </label>

                <label htmlFor="Team_Location">
                    <input type="text" name="Team_Location" id="Team_Location" placeholder="Team_Location" />
                </label>
                
                <label htmlFor="Team_Name">
                    <input type="text" name="Team_Name" id="Team_Name" placeholder="Team_Name" />
                </label>

                <label htmlFor="Location_Code">
                    <input type="number" name="Location_Code" id="Location_Code" placeholder="Location_Code" />
                </label>
                    <button>Update Team</button>
                </Form>



                <Form action={`/delete/${aTeam.id}/`} method="POST">
                    <button>Banish A Team</button>
                </Form>


            </div>
            <Link to={"/"}>
                <button>Back to Home</button>
            </Link>
        </div>
    )
}