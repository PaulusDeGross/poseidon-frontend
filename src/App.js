import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import { Welcome, Tutorial, Main } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="app" element={<Main />} />
                <Route path="tutorial" element={<Tutorial />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
