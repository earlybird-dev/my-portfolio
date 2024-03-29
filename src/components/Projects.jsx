import React from 'react';
import bg from '../images/projects/bg.svg';
import screen2 from '../images/projects/screen2.png';
import screen3 from '../images/projects/screen3.png';
import screen4 from '../images/projects/screen4.png';
import screen5 from '../images/projects/screen5.png';
import css1 from '../images/skills/css1.png';
import js2 from '../images/skills/js2.png';
import bootstrap1 from '../images/skills/bootstrap1.png';
import sass1 from '../images/skills/sass1.png';
import reactjs2 from '../images/skills/reactjs2.png';
import typescript1 from '../images/skills/typescript1.png';
import gs from '../images/skills/gs.png';
import gas from '../images/skills/gas.png';
import firebase from '../images/skills/firebase.png';
import api from '../images/skills/api.png';
import github from '../images/skills/github.png';
import data2 from '../images/skills/data2.png';

const Projects = () => {
  const bgStyle = { backgroundImage: `url(${bg})` };

  return (
    <section id="projects" className="bg-black">
      <div className="container">
        <h2>
          <i className="me-2 fa fa-code fa-3dicon text-lightblue me-2"></i>{' '}
          Projects
        </h2>
        <div className="row g-5">
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column bg-darkgray ">
              <div className="position-relative">
                <div className="project-links d-flex gap-3 gap-md-4 gap-lg-5">
                  <a
                    href="https://tasmanianberries.com.au/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2 fa fa-external-link"></i>
                    <span>Live</span>
                  </a>
                  <a href="#projects">
                    <i className="me-2 fa fa-code"></i>
                    <span>Code</span>
                  </a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay" style={bgStyle}></div>
                  <img src={screen2} alt="" className="p-3" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-5">
                <div className="project-name text-center">
                  Tasmanian Berries Website
                </div>
                <div className="project-description my-3 my-md-4 px-3 px-md-4 px-lg-5">
                  <ul className="p-4 p-md-5 border-corners bg-dark">
                    <li className="mb-2">
                      The company website was rebuilt from scratch with{' '}
                      <span className="font-monospace text-gray p-1">
                        ReactJS
                      </span>{' '}
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        Bootstrap 5
                      </span>{' '}
                      and{' '}
                      <span className="font-monospace text-gray p-1">SASS</span>
                      .
                    </li>
                    <li className="mb-2">
                      A{' '}
                      <span className="font-monospace text-gray p-1">
                        Google Sheets API
                      </span>{' '}
                      was created which connected to a spreadsheet, get the list
                      of job vacancies, and then delivered it to the website
                      with zero latency.
                    </li>
                    <li className="mb-2">
                      Updating the content of the{' '}
                      <a
                        href="https://tasmanianberries.com.au/work-with-us"
                        className="text-lightblue"
                        target="_blank"
                        rel="noreferrer"
                      >
                        career page
                      </a>{' '}
                      could be done within seconds just by using a Google
                      Spreadsheet.
                    </li>
                    <span className="border_btm"></span>
                  </ul>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4 px-3 px-md-4 px-lg-5">
                  <img src={reactjs2} alt="ReactJS" className="rounded" />
                  <img src={bootstrap1} alt="Bootstrap" className="rounded" />
                  <img src={sass1} alt="SASS" className="rounded" />
                  <img
                    src={firebase}
                    alt="Firestore Database"
                    className="rounded"
                  />
                  <img src={gs} alt="Google Sheets API" className="rounded" />
                  <img src={api} alt="API" className="rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column bg-darkgray">
              <div className="position-relative">
                <div className="project-links d-flex gap-3 gap-md-4 gap-lg-5">
                  <a
                    href="https://script.google.com/a/u/macros/s/AKfycbzqA_BjxQ2x_JSOjYQ69ayHRxQFZ99iA2w9MhfRoBwZ84tofg-WFEwX7WmbVVxP91LboQ/exec"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2 fa fa-external-link"></i>
                    <span>Live</span>
                  </a>
                  <a href="#projects">
                    <i className="me-2 fa fa-code"></i>
                    <span>Code</span>
                  </a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay" style={bgStyle}></div>
                  <img src={screen3} alt="" className="p-3" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-5">
                <div className="project-name text-center">
                  Tasmanian Berries Web Apps{' '}
                  <span className="text-lightblue">x5</span>
                </div>
                <div className="project-description my-3 my-md-4 px-3 px-md-4 px-lg-5">
                  <ul className="p-4 p-md-5 border-corners bg-dark">
                    <li className="mb-2">
                      A number of in-house web apps were built using{' '}
                      <span className="font-monospace text-gray p-1">
                        JavaScript
                      </span>
                      , vanilla{' '}
                      <span className="font-monospace text-gray p-1">CSS</span>,{' '}
                      <span className="font-monospace text-gray p-1">
                        Bootstrap
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      A single web app would come with its own spreadsheet and{' '}
                      <span className="font-monospace text-gray p-1">
                        Google Sheets API
                      </span>{' '}
                      as a backend.
                    </li>
                    <li className="mb-2">
                      One of the apps allowed harvest supervisors manage the
                      daily attendance and performance of 400+ seasonal workers.
                      The other apps could help with stock management, daily
                      harvest report, email automation, etc.
                    </li>
                    <li className="mb-2">
                      See an example of the{' '}
                      <a
                        href="https://script.google.com/a/u/macros/s/AKfycbzqA_BjxQ2x_JSOjYQ69ayHRxQFZ99iA2w9MhfRoBwZ84tofg-WFEwX7WmbVVxP91LboQ/exec"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lightblue"
                      >
                        PPE Stocktake App
                      </a>
                      .
                    </li>
                    <span className="border_btm"></span>
                  </ul>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4 px-3 px-md-4 px-lg-5">
                  <img src={css1} alt="CSS" className="rounded" />
                  <img src={bootstrap1} alt="Bootstrap" className="rounded" />
                  <img src={js2} alt="JavaScript" className="rounded" />
                  <img src={gas} alt="Google Apps Script" className="rounded" />
                  <img src={gs} alt="Google Sheets API" className="rounded" />
                  <img src={api} alt="API" className="rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column bg-darkgray">
              <div className="position-relative">
                <div className="project-links d-flex gap-3 gap-md-4 gap-lg-5">
                  <a
                    href="https://cado-2022.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2 fa fa-external-link"></i>
                    <span>Live</span>
                  </a>
                  <a href="#projects">
                    <i className="me-2 fa fa-code"></i>
                    <span>Code</span>
                  </a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay" style={bgStyle}></div>
                  <img src={screen4} alt="" className="p-3" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-5">
                <div className="project-name text-center">
                  PointsBet <span className="text-lightblue">Clone</span>
                </div>
                <div className="project-description my-3 my-md-4 px-3 px-md-4 px-lg-5">
                  <ul className="p-4 p-md-5 border-corners bg-dark">
                    <li className="mb-2">
                      Replicated PointsBet Australia homepage using the{' '}
                      <a
                        href="https://the-odds-api.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lightblue"
                      >
                        Sports betting API
                      </a>{' '}
                      which covered the actual odds from bookmakers around the
                      world.
                    </li>
                    <li className="mb-2">
                      Used{' '}
                      <span className="font-monospace text-gray p-1">
                        Bootstrap 5
                      </span>
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        ReactJS
                      </span>{' '}
                      and{' '}
                      <span className="font-monospace text-gray p-1">
                        TypeScript
                      </span>{' '}
                      for the frontend.
                    </li>
                    <li className="mb-2">
                      The website was deployed on{' '}
                      <span className="font-monospace text-gray p-1">
                        Firebase
                      </span>{' '}
                      and using{' '}
                      <span className="font-monospace text-gray p-1">
                        Firebase Authentication
                      </span>{' '}
                      to authenticate users of the app.
                    </li>
                    <span className="border_btm"></span>
                  </ul>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4  px-3 px-md-4 px-lg-5">
                  <img src={reactjs2} alt="ReactJS" className="rounded" />
                  <img src={typescript1} alt="TypeScript" className="rounded" />
                  <img src={bootstrap1} alt="Bootstrap" className="rounded" />
                  <img src={sass1} alt="SASS" className="rounded" />
                  <img src={firebase} alt="Firebase" className="rounded" />
                  <img src={api} alt="API" className="rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="project d-flex flex-column bg-darkgray">
              <div className="position-relative">
                <div className="project-links d-flex gap-3 gap-md-4 gap-lg-5">
                  <a
                    href="https://datasciblog.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2 fa fa-external-link"></i>
                    <span>Live</span>
                  </a>
                  <a href="#projects">
                    <i className="me-2 fa fa-code"></i>
                    <span>Code</span>
                  </a>
                </div>
                <div className="project-img d-flex align-items-center justify-content-center">
                  <div className="overlay" style={bgStyle}></div>
                  <img src={screen5} alt="" className="p-3" />
                </div>
              </div>
              <div className="project-info d-flex flex-column px-0 py-5">
                <div className="project-name text-center">
                  Data Science Blog
                </div>

                <div className="project-description my-3 my-md-4 px-3 px-md-4 px-lg-5">
                  <ul className="p-4 p-md-5 border-corners bg-dark">
                    <li className="mb-2">
                      The blog was created using Minimal Mistakes theme and
                      hosted on GitHub Page.
                    </li>
                    <li className="mb-2">
                      I used it to showcase my projects and experience in{' '}
                      <span className="font-monospace text-gray p-1">
                        Data Analytics
                      </span>
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        Machine Learning
                      </span>
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        Kaggle Competitions
                      </span>
                      , etc.
                    </li>
                    <span className="border_btm"></span>
                  </ul>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4 px-3 px-md-4 px-lg-5">
                  <img src={github} alt="GitHub Page" className="rounded" />
                  <img src={data2} alt="Data Analytics" className="rounded" />
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
