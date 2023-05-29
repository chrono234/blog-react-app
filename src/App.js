import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "C:/Users/jaior/OneDrive/Escritorio/Nuevos proyectos/my-blog/src/pages/HomePage.js";
import AboutPage from "C:/Users/jaior/OneDrive/Escritorio/Nuevos proyectos/my-blog/src/pages/AboutPage.js";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar>My awesome blog</NavBar>
        <div id="page-body">
          <Routes>
            <Route path="/blog-react-app" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
