import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomMovie from "./Pages/RoomMovie/RoomMovie";
import Main from "./Pages/Main/Main";
import Error from "./Pages/Error/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/CineCode/" element={<Main/>} />
                <Route path="/room/:id" element={<RoomMovie/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
