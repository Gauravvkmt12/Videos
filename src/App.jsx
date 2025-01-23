import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Bottomnav from "./components/Bottomnav";
import Videos from "./components/Videos";
import Login from "./components/Login";
import Stories from "./components/Stories";
import SearchResult from "./components/SearchResult";
import Preloader from "./components/Preloader"; // Import Preloader
import News from "./components/News";
import Categories from "./components/Categories"
import Blogs from "./components/Blogs";
import Signup from "./components/Signup";
import Podcast from "./components/Podcast";
import Play from "./components/Play";
import Singleblog from "./components/Singleblog";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/News" element={<News />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Signup" element={<Signup/>} /> 
          <Route path="/Play" element={<Play />} /> 
          <Route path="/Singleblog" element={<Singleblog />} />
        </Routes>
        <Bottomnav />
      </div>
    </Router>
  );
}

export default App;
