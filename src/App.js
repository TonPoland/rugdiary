import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

const projectsData = [
  {
    title: 'Ton Checker',
    description: 'tekst',
    image: 'toncheker.png',
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {projectsData.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;