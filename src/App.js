import React from "react"

import {Route, Routes} from 'react-router-dom'
import './index.css'
import { Home, Login } from "./components"
const App = () => {
    return (
        <div className="w-screen h-screen bg-blue-400 flex justify-center items-center">
            <Routes>
                <Route path='Login' element={<Login/>}/>
                <Route path='/*' element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default App