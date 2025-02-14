import React from "react"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
import './app.css'
function App() {

  return (
    <UserContextProvider>
    <h1>Normal Codebase To understand UserContext API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
