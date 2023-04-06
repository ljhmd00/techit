import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Worldcup from "./pages/worldcup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/worldcup" element={<Worldcup />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
