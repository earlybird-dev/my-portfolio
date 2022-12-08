import React from 'react';
import web1 from '../web1.gif';
import web2 from '../web2.gif';
import web3 from '../web3.gif';
import web4 from '../web4.gif';
import web5 from '../web5.gif';
import web6 from '../web6.gif';

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-5">
      <div className="container">
        <h2 className="">
          <span>Projects</span>
        </h2>
        <div className="row g-4">
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a href="#projects">View Project</a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay"></div>
                  <img src={web4} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-3">
                <div className="project-name">Project 1</div>
                <div className="project-skills text-gray d-flex flex-wrap gap-3">
                  <div>#ReactJS</div>
                  <div>#Bootstrap</div>
                  <div>#Sass</div>
                  <div>#Firebase</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a href="#projects">View Project</a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay"></div>
                  <img src={web2} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-3">
                <div className="project-name">Project 2</div>
                <div className="project-skills text-gray d-flex flex-wrap gap-3">
                  <div>#ReactJS</div>
                  <div>#Bootstrap</div>
                  <div>#Sass</div>
                  <div>#Firebase</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a href="#projects">View Project</a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay"></div>
                  <img src={web6} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-3">
                <div className="project-name">Project 3</div>
                <div className="project-skills text-gray d-flex flex-wrap gap-3">
                  <div>#ReactJS</div>
                  <div>#Bootstrap</div>
                  <div>#Sass</div>
                  <div>#Firebase</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a href="#projects">View Project</a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay"></div>
                  <img src={web5} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-3">
                <div className="project-name">Project 4</div>
                <div className="project-skills text-gray d-flex flex-wrap gap-3">
                  <div>#ReactJS</div>
                  <div>#Bootstrap</div>
                  <div>#Sass</div>
                  <div>#Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
