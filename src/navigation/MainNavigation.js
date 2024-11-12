import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ChatBox from '../pages/ChatBox'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
const MainNavigation = () => {
    const [user] = useAuthState(auth)
    return (
        <Router>
            <Routes>
                {
                    user ? (
                        <Route path="/" element={<ChatBox />} />
                    ) : (
                        <Route path="/" element={<LoginPage />} />
                    )
                }
            </Routes>
        </Router>
    )
}

export default MainNavigation
