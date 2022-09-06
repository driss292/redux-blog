import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Article from "./Pages/Article/Article";
import AddArticle from "./Pages/AddArticle/AddArticle";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ecrire" element={<AddArticle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/articles/:slug" element={<Article />} />
            </Routes>
        </>
    );
}

export default App;
