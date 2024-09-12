import { Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { NotFound } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
