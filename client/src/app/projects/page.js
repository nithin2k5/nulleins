"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import './page.css';
import './mobileview.css';

const projectsData = [
  {
    name: 'Full Stack App in Django and React',
    open: 1,
    closed: 0,
    author: '@deepakreddygathpa',
    updated: '1 hr ago',
  },
  {
    name: 'Resume Generator with NextJs',
    open: 1,
    closed: 0,
    author: '@PavanKarthik',
    updated: '1 hr ago',
  },
  {
    name: 'Student Management System with PHP',
    open: 1,
    closed: 0,
    author: '@SaiManikanta',
    updated: '1 hr ago',
  },
  {
    name: 'CICD with Docker & Kubernetes',
    open: 1,
    closed: 0,
    author: '@deepakreddygathpa',
    updated: '1 hr ago',
  },
];

const Page = () => {
  const [projectName, setProjectName] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = projectsData.filter(project => project.name.toLowerCase().includes(searchValue));
    setFilteredProjects(filtered);
    setProjectName(searchValue);
  };

  return (
    <div className='projectscomponent'>
      <div className="projectsContainer">
        <div className="projects-header">
          <div className="projects-header-in">
            <div className="phi-one">
              <h1>Welcome to ZeroOne's Projects Section</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut placeat similique nostrum nobis, vitae omnis. Ex perspiciatis at, neque facere debitis suscipit praesentium tenetur quae labore qui similique atque.</p>
              <Link href='/'> Learn more </Link>
            </div>
            <div className="phi-two"></div>
          </div>
        </div>

        <div className="search-project">
          <div className="search-project-in"></div>
        </div>

        <div className="search">
          <div className="search-in">
            <div className="search-in-one">
              <input type="text" value={projectName} onChange={handleSearch} />
            </div>
            <div className="search-in-two">
              <button><p>SEARCH</p></button>
            </div>
          </div>
        </div>

        {filteredProjects.map(project => (
          <div className="project" key={project.name}>
            <div className="project-in">
              <div className="project-one">
                <div className="project-one-in">
                  <div className="po-in-one">
                    <p>{project.name}</p>
                  </div>
                  <div className="po-in-two">
                    <div className="po-in-two-in">
                      <p>{project.open} Open</p>
                      <p>{project.closed} Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-two">
                <div className="project-two-in">
                  <div className="pt-in-two">
                    <p>{project.author}</p>
                    <p>Updated {project.updated}</p>
                  </div>
                  <div className="pt-in-two pt-in-two-two ">
                    <Link className='contribute-links' href='/'>Contribute</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
