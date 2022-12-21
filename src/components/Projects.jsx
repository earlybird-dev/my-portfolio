import React from 'react';
import web1 from '../web1.gif';
import web2 from '../web2.gif';
import web3 from '../web3.gif';
import web4 from '../web4.gif';
import web5 from '../web5.gif';
import web6 from '../web6.gif';
import strawberry from '../strawberry.gif';
import strawberry2 from '../strawberry2.gif';
import betting from '../betting.gif';
import ml from '../ml.gif';

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-5">
      <div className="container">
        <h2 className="highlight">Projects </h2>
        <div className="row g-4">
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a
                    href="https://tasmanianberries.com.au/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center bg-darkred">
                  <div className="overlay"></div>
                  <img src={strawberry2} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-2 py-md-3 py-lg-4">
                <div className="project-name text-center">
                  Tasmanian Berries Website
                </div>
                <div className="project-description mt-3 mt-md-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda, magnam sapiente deserunt dolorum illum sed
                    adipisci quibusdam quod esse alias quia repellat optio.
                    Dolore deleniti obcaecati magni sint eligendi dignissimos.
                  </p>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 px-3 px-md-4 px-lg-5">
                  <div>#ReactJS</div>
                  <div>#Bootstrap</div>
                  <div>#Sass</div>
                  <div>#Google Sheets API</div>
                  <div>#Firestore Database</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a
                    href="https://script.google.com/a/u/macros/s/AKfycbzqA_BjxQ2x_JSOjYQ69ayHRxQFZ99iA2w9MhfRoBwZ84tofg-WFEwX7WmbVVxP91LboQ/exec"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center bg-darkred">
                  <div className="overlay"></div>
                  <img src={strawberry} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-2 py-md-3 py-lg-4">
                <div className="project-name text-center">
                  Tasmanian Berries Web Apps{' '}
                  <span className="text-blue">x5</span>
                </div>
                <div className="project-description mt-3 mt-md-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda, magnam sapiente deserunt dolorum illum sed
                    adipisci quibusdam quod esse alias quia repellat optio.
                    Dolore deleniti obcaecati magni sint eligendi dignissimos.
                  </p>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 px-3 px-md-4 px-lg-5">
                  <div>#CSS/Bootstrap</div>
                  <div>#JavaScript</div>
                  <div>#Google Apps Script</div>
                  <div>#Google Sheets API</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a
                    href="https://cado-2022.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center bg-darkred">
                  <div className="overlay"></div>
                  <img src={betting} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-2 py-md-3 py-lg-4">
                <div className="project-name text-center">
                  PointsBet <span className="text-blue">Clone</span>
                </div>
                <div className="project-description mt-3 mt-md-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda, magnam sapiente deserunt dolorum illum sed
                    adipisci quibusdam quod esse alias quia repellat optio.
                    Dolore deleniti obcaecati magni sint eligendi dignissimos.
                  </p>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 px-3 px-md-4 px-lg-5">
                  <div>#ReactJS</div>
                  <div>#TypeScript</div>
                  <div>#Bootstrap</div>
                  <div>#Sass</div>
                  <div>#The Odds API</div>
                  <div>#Firebase</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column">
              <div className="position-relative">
                <div className="project-links d-flex align-items-center flex-column flex-md-row gap-0 gap-md-4">
                  <a
                    href="https://datasciblog.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a href="#projects">View Code</a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center bg-darkred">
                  <div className="overlay"></div>
                  <img src={ml} alt="logo" className="" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-2 py-md-3 py-lg-4">
                <div className="project-name text-center">
                  Data Science Blog
                </div>

                <div className="project-description mt-3 mt-md-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda, magnam sapiente deserunt dolorum illum sed
                    adipisci quibusdam quod esse alias quia repellat optio.
                    Dolore deleniti obcaecati magni sint eligendi dignissimos.
                  </p>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 px-3 px-md-4 px-lg-5">
                  <div>#GitHub Page</div>
                  <div>#Jekyll</div>
                  <div>#Minimal Mistakes</div>
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
