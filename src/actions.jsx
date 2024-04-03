
import { redirect } from "react-router-dom"

const URL = import.meta.env.VITE_BASE_URL


// Create
export const createAction = async ({ request }) => {
    // console.log("check in")
    const formData = await request.formData()

    const newTeam = {
        Sport: formData.get("Sport"),
        Sport_Short_Description: formData.get("Sport_Short_Description"),
        Team: formData.get("Team"),
        League: formData.get("League"),
        League_Division: formData.get("League_Division"),
        League_Short_Description: formData.get("League_Short_Description"),
        Division: formData.get("Division"),
        Team_Location: formData.get("Team_Location"),
        Team_Name: formData.get("Team_Name"),
        Location_Code: formData.get("Location_Code"),
    }

    await fetch(`${URL}Team_Info/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTeam)
    })
    return redirect("/")
}

// Update
export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updateTeam = {
        Sport: formData.get("Sport"),
        Sport_Short_Description: formData.get("Sport_Short_Description"),
        Team: formData.get("Team"),
        League: formData.get("League"),
        League_Division: formData.get("League_Division"),
        League_Short_Description: formData.get("League_Short_Description"),
        Division: formData.get("Division"),
        Team_Location: formData.get("Team_Location"),
        Team_Name: formData.get("Team_Name"),
        Location_Code: formData.get("Location_Code"),
    }
    await fetch(`${URL}Team_Info/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateTeam)
    })
    return redirect(`/teams/${id}`)
}


// Delete
export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${URL}Team_Info/${id}/`, {
        method: "DELETE"
    })
    return redirect("/")
}