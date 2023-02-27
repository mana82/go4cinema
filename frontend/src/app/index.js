import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { useRef, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route exact path="/movies/list" element={<MoviesList />} />
                <Route exact path="/movies/create" element={<MoviesInsert/>} />
                <Route exact path="/movies/update/:id" element={<MoviesUpdate/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App