import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/a" element={<A />}></Route>
                <Route path="/b" element={<B />}></Route>
                <Route path="/c" element={<C />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
