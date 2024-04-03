
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexTeamLoader, showTeamLoader, indexBatterLoader, showBatterLoader } from "./loaders";
import { createAction, updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='' element={<Index/>} loader={ indexTeamLoader }/>
            <Route path='' element={<Index/>} loader={ indexBatterLoader }/>
            <Route path='teams/:id' element={<Show/>} loader={ showTeamLoader }/>
            <Route path='batters/:id' element={<Show/>} loader={ showBatterLoader }/>
            <Route path='create' action={ createAction } />
            <Route path='update/:id' action={ updateAction }/>
            <Route path='delete/:id' action={ deleteAction }/>
        </Route>
    </>
))

export default router