import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import Project from './components/Project';

function App() {
  const [page, setPage] = useState("AboutMe");
  const handlePageChange = (page) => setPage(page);

  const renderPage = (currentPage) => {
    if (currentPage === "AboutMe") {
      return <AboutMe />
    } else if (currentPage === "Contact") {
      return <Contact />
    } else if (currentPage === "Project") {
      return <Project />
    }
  };

  return (

    <div>
      <Nav page={page} handlePageChange={handlePageChange} />
      {renderPage(page)}
      <Footer />
    </div>
  );
}

export default App;
