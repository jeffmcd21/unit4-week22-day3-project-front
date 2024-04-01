
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader, showTeamLoader, showBatterLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='' element={<Index/>} loader={ indexLoader }/>
            <Route path='batters/:id' element={<Show/>} loader={ showBatterLoader }/>
            <Route path='teams/:id' element={<Show/>} loader={ showTeamLoader }/>
            <Route/>
            <Route/>
            <Route/>
        </Route>
    </>
))

export default router