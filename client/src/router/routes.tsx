
import Settings from "../pages/settings/Settings"
import Consts from "../pages/consts/Consts"
import Variables from "../pages/variables/Variables"
import Dashboard from "../pages/dashboard/Dashboard"
import { createBrowserRouter } from "react-router-dom"
export const pages = [
    { 
        path: "settings",
        elemet:<Settings/>,
        display: 'Settings',
    },
    { 
        path: "variables",
        elemet:<Variables/>,
        display: 'Variables'
    },
    { 
        path: "consts",
        elemet:<Consts/>,
        display: 'Consts'
    },
    { 
        path: "dashboard",
        elemet:<Dashboard/>,
        display: 'Dashboard'
    },
]
export const routes = createBrowserRouter(pages)
