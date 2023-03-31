import React from 'react'
import NavBar from './components/navbar/NavBar'
import EnterHour from './components/enterhours/EnterHour'
import ViewHour from './components/viewhours/ViewHour';
import OfficerPortal from './components/officerportal/OfficerPortal';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
    return (
        <>
            <Router>
                <NavBar />
                <div className='container'>
                    <EnterHour />
                </div>
                <Routes>
                    <Route path="/enterhour" element={
                        <EnterHour />
                        } />
                    <Route path="/viewhour" element={
                        <ViewHour />
                        } />
                    <Route path="/officerportal" element={
                        <OfficerPortal />
                        } />
                </Routes>
            </Router>
        </>
    )
}

export default App