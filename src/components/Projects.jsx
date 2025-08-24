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
import bigquery from '../images/skills/bigquery.png';
import power_bi from '../images/skills/power_bi.png';
import data2 from '../images/skills/data2.png';
import python2 from '../images/skills/python2.png';

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
            <div className="project d-flex flex-column bg-darkgray">
              <div className="position-relative">
                <div className="project-links d-flex gap-3 gap-md-4 gap-lg-5">
                  <a
                    href="https://i.redd.it/fh73qa5id7tc1.jpeg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2 fa fa-external-link"></i>
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="https://github.com/earlybird-dev/oz-grocery-price-analysis"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  Oz Grocery Price Analysis
                </div>
                <div className="project-description my-3 my-md-4 px-3 px-md-4 px-lg-5">
                  <ul className="p-4 p-md-5 border-corners bg-dark">
                    <li className="mb-2">
                      Developed an automated data pipeline using{' '}
                      <span className="font-monospace text-gray p-1">
                        Python
                      </span>
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        Selenium
                      </span>
                      , and{' '}
                      <span className="font-monospace text-gray p-1">
                        Mage.ai
                      </span>{' '}
                      to scrape grocery pricing data from Coles and Woolworths, processing hierarchical product catalogues and tracking price variations across 250,000+ products.
                    </li>
                    <li className="mb-2">
                      Architected and deployed a cloud-native ETL solution on{' '}
                      <span className="font-monospace text-gray p-1">
                        Google Cloud Platform
                      </span>{' '}
                      with{' '}
                      <span className="font-monospace text-gray p-1">
                        BigQuery
                      </span>{' '}
                      data warehousing,{' '}
                      <span className="font-monospace text-gray p-1">
                        Docker
                      </span>{' '}
                      containerisation, and{' '}
                      <span className="font-monospace text-gray p-1">
                        Terraform
                      </span>{' '}
                      IaC.
                    </li>
                    <li className="mb-2">
                      Implemented automated scheduling, scalable infrastructure, and CI/CD capabilities with interactive{' '}
                      <span className="font-monospace text-gray p-1">
                        Power BI
                      </span>{' '}
                      dashboard for price trend analysis.
                    </li>
                    <span className="border_btm"></span>
                  </ul>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4  px-3 px-md-4 px-lg-5">
                  <img src={python2} alt="Python" className="rounded" />
                  <img src={bigquery} alt="BigQuery" className="rounded" />
                  <img src={power_bi} alt="Power BI" className="rounded" />
                  <img src={data2} alt="Data Analytics" className="rounded" />
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
                    href="https://www.learningwithtext.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="me-2 fa fa-external-link"></i>
                    <span>Live</span>
                  </a>
                  <a
                    href="https://github.com/earlybird-dev/learningwithtext"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  Learning With Text
                </div>
                <div className="project-description my-3 my-md-4 px-3 px-md-4 px-lg-5">
                  <ul className="p-4 p-md-5 border-corners bg-dark">
                    <li className="mb-2">
                      Developed an interactive vocabulary learning platform using{' '}
                      <span className="font-monospace text-gray p-1">
                        ReactJS
                      </span>{' '}
                      and{' '}
                      <span className="font-monospace text-gray p-1">
                        TypeScript
                      </span>{' '}
                      that enables users to paste any text and automatically identifies challenging words through intelligent analysis.
                    </li>
                    <li className="mb-2">
                      Implemented user authentication and cloud data synchronisation with{' '}
                      <span className="font-monospace text-gray p-1">
                        Firebase Auth
                      </span>{' '}
                      and{' '}
                      <span className="font-monospace text-gray p-1">
                        Firestore
                      </span>
                      , enabling cross-device access to personalised flashcards, learning progress, and saved vocabulary.
                    </li>
                    <li className="mb-2">
                      Features difficulty-based categorisation and personalised flashcard-based learning with{' '}
                      <span className="font-monospace text-gray p-1">
                        Bootstrap
                      </span>{' '}
                      and{' '}
                      <span className="font-monospace text-gray p-1">
                        SASS
                      </span>{' '}
                      styling.
                    </li>
                    <span className="border_btm"></span>
                  </ul>
                </div>
                <div className="project-skills d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4 px-3 px-md-4 px-lg-5">
                  <img src={reactjs2} alt="ReactJS" className="rounded" />
                  <img src={typescript1} alt="TypeScript" className="rounded" />
                  <img src={bootstrap1} alt="Bootstrap" className="rounded" />
                  <img src={sass1} alt="SASS" className="rounded" />
                  <img src={firebase} alt="Firebase" className="rounded" />
                </div>
              </div>
            </div>
          </div>
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
                      Rebuilt the company website from scratch using{' '}
                      <span className="font-monospace text-gray p-1">
                        ReactJS
                      </span>
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        Bootstrap 5
                      </span>
                      , and{' '}
                      <span className="font-monospace text-gray p-1">SASS</span>
                      , delivering a modern, responsive web presence that improved user experience and company branding.
                    </li>
                    <li className="mb-2">
                      Developed a dynamic{' '}
                      <span className="font-monospace text-gray p-1">
                        Google Sheets API
                      </span>{' '}
                      integration that automatically synchronises job vacancy data from spreadsheets to the website, enabling real-time content updates with zero latency.
                    </li>
                    <li className="mb-2">
                      Implemented content management system allowing instant updates to the{' '}
                      <a
                        href="https://tasmanianberries.com.au/work-with-us"
                        className="text-lightblue"
                        target="_blank"
                        rel="noreferrer"
                      >
                        career page
                      </a>{' '}
                      through Google Spreadsheet integration, streamlining recruitment workflows and reducing administrative overhead.
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
                      Developed a professional technical blog using{' '}
                      <span className="font-monospace text-gray p-1">
                        Jekyll
                      </span>{' '}
                      with Minimal Mistakes theme and deployed on{' '}
                      <span className="font-monospace text-gray p-1">
                        GitHub Pages
                      </span>
                      , creating a platform for sharing data science insights and methodologies.
                    </li>
                    <li className="mb-2">
                      Documented comprehensive projects and analytical approaches in{' '}
                      <span className="font-monospace text-gray p-1">
                        Data Analytics
                      </span>
                      ,{' '}
                      <span className="font-monospace text-gray p-1">
                        Machine Learning
                      </span>
                      , and{' '}
                      <span className="font-monospace text-gray p-1">
                        Kaggle Competitions
                      </span>
                      , demonstrating technical expertise and problem-solving methodologies.
                    </li>
                    <li className="mb-2">
                      Established thought leadership in data science community through detailed case studies, code examples, and analytical frameworks that showcase practical applications of statistical methods and machine learning algorithms.
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
