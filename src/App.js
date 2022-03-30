import React from 'react'
import { Routes, Route } from 'react-router-dom'

import WeekView from './Components/Planning/WeekView/WeekView'
import DriverList from './Components/DriverList/DriverList'
import TractorList from './Components/TractorList/TractorList'
import NavBar from '../src/Components/Global/NavBar'
import ShowDriver from './Components/DriverList/ShowDriver/ShowDriver'
import './styles.css'
import WeekPlanList from './Components/WeekPlanList/WeekPlanList'

function App() {
    return (
        <div className="body">
            <NavBar />
            <Routes>
                <Route path="/" element={<WeekPlanList />} />
                <Route path="planning" element={<WeekView />} />
                <Route path="drivers" element={<DriverList />} />
                <Route path="drivers/:driverId" element={<ShowDriver />} />
                <Route path="tractors" element={<TractorList />} />
            </Routes>
        </div>
    )
}

export default App
