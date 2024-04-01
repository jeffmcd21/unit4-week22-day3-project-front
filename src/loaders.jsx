
const URL = import.meta.env.VITE_BASE_URL

const Items_Per_Page = 10;

export const indexTeamLoader = async () => {
    const response = await fetch(`${URL}/Team_Info/`)
    const allTeams = await response.json()
    return allTeams
}

export const showTeamLoader = async ({ params }) => {
    const response = await fetch(`${URL}/Team_Info/${params.id}/`)
    const aTeam = await response.json()
    return aTeam
}


// > < //

export const indexBatterLoader = async () => {
    const response2 = await fetch(`${URL}/Batter_Info/`)
    const allBatters = await response2.json()
    return allBatters
}

export const showBatterLoader = async ({ params }) => {
    const response2 = await fetch(`${URL}/Batter_Info/${params.id}/`)
    const aBatter = await response2.json()
    return aBatter
}