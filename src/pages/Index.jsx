
// Import our Team Component
// import Batter from "../components/Batter"
import Team from "../components/Team"
import { Form, useLoaderData, Link } from "react-router-dom"
import { useState } from "react"


export default function Index() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const allTeams = useLoaderData()
    const filteredTeams = allTeams.filter((team) =>
        team.Team.toLowerCase().includes(searchTerm.toLowerCase()))
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5;
    
    const getPageCount = () => {
        return Math.ceil(allTeams.length / itemsPerPage)
    }

    const indexOfLastTeam = currentPage * itemsPerPage
    const indexOfFirstTeam = indexOfLastTeam - itemsPerPage
    // const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    const renderPaginationButtons = () => {
        const pageCount = getPageCount()
        const buttons = []

        for (let i = 1; i <= pageCount; i++) {
            buttons.push(
                <button class="button button-outline" key={i} onClick={() => handlePageChange(i)}>
                    {i}
                </button>
            )
        }
        return buttons
    }

    const searchedAndSlicedTeams = filteredTeams
        .filter((team) => team.Team.toLowerCase().includes(searchTerm.toLowerCase())).slice(indexOfFirstTeam, indexOfLastTeam)


    return (
        <>
        
        <h1>Search Teams...</h1>
            <input
                type="text"
                placeholder="Search Teams..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
            <br/>
            { searchedAndSlicedTeams.map((team, i) => (
                <Team team={team} key={i}/>))}
            <div>{renderPaginationButtons()}</div>
        <hr/>


        <h3>Add a Team</h3>
        <button class="button button-outline" onClick={() => setIsFormVisible(!isFormVisible)}>
            {isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>

        <div className={isFormVisible ? '': 'hidden'}>
            <Form action="/create" method="post">
                <label htmlFor="Sport">
                    <input type="text" name="Sport" id="Sport" placeholder="Sport" />
                </label>

                <label htmlFor="Sport_Short_Description">
                    <input type="text" name="Sport_Short_Description" id="Sport_Short_Description" placeholder="Sport_Short_Description" />
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

                <label htmlFor="Image">
                    <input type="text" name="Image" id="Image" placeholder="Image" />
                </label>

                <button>Create A Team</button>

            </Form>
        </div>


            <br/>
            <hr/>
            <h1>-- Coming Soon --</h1>
            <div>
                <Link to='info/' className="info-link">MiLB Teams Page</Link>
            </div>
            {/* <hr/> */}
            <div>
                <Link to='batters/' className="batter-link">Batter Stats Page</Link>
            </div>
            {/* <hr/> */}
            <div>
                <Link to='pitchers/' className="pitcher-link">Pitcher Stats Page</Link>
            </div>

        </>
    )
}