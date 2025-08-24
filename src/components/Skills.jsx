import React from 'react';
// Programming Languages
import python2 from '../images/skills/python2.png';
import sql1 from '../images/skills/sql1.png';
import js2 from '../images/skills/js2.png';
import typescript1 from '../images/skills/typescript1.png';
// Web Development
import html2 from '../images/skills/html2.png';
import css1 from '../images/skills/css1.png';
import bootstrap1 from '../images/skills/bootstrap1.png';
import sass1 from '../images/skills/sass1.png';
import reactjs2 from '../images/skills/reactjs2.png';
// Cloud & Databases
import firebase from '../images/skills/firebase.png';
import bigquery from '../images/skills/bigquery.png';
import power_bi from '../images/skills/power_bi.png';
import data2 from '../images/skills/data2.png'; // For Data Analytics
// Tools & APIs
import git1 from '../images/skills/git1.png';
import gs from '../images/skills/gs.png';
import gas from '../images/skills/gas.png';
import api from '../images/skills/api.png';

const Skills = () => {
  return (
    <section id="skills" className="bg-darkgray">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="mb-3 mb-md-5">
            <h2>
              <i className="fa fa-key fa-3dicon text-lightblue me-2"></i> Skills
            </h2>
            <p className="p-4 p-md-5 border-corners bg-dark">
              Solution-oriented Data Analyst and Analytics Engineer with 3+ years of
              experience delivering comprehensive data solutions across the full analytics
              lifecycle. Expertise spans ETL processes, statistical analysis, and advanced
              modelling techniques with modern data stack technologies and web development
              frameworks.
              <span className="border_btm"></span>
            </p>
          </div>
        </div>
        <div className="d-inline-flex flex-wrap align-items-center justify-content-center w-100">
          {/* Programming Languages */}
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={python2} alt="Python" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Python</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={sql1} alt="SQL" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">SQL</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={js2} alt="JavaScript" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">JavaScript</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={typescript1} alt="TypeScript" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">TypeScript</div>
              </div>
            </div>
          </div>
          {/* Data Engineering & Analytics */}
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={bigquery} alt="BigQuery" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">BigQuery</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={power_bi} alt="Power BI" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Power BI</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={data2} alt="Data Analytics" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Data Analytics</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={firebase} alt="Firebase" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Firebase</div>
              </div>
            </div>
          </div>
          {/* Web Development */}
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={reactjs2} alt="ReactJS" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">ReactJS</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={bootstrap1} alt="Bootstrap" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Bootstrap</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={html2} alt="HTML" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">HTML</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={css1} alt="CSS" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">CSS</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={sass1} alt="SASS" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">SASS</div>
              </div>
            </div>
          </div>
          {/* APIs & Tools */}
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={api} alt="REST APIs" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">REST APIs</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={git1} alt="Git" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Git</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={gs} alt="Google Sheets API" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Google Sheets API</div>
              </div>
            </div>
          </div>
          <div className="m-3 m-lg-4">
            <div className="skill">
              <img src={gas} alt="Google Apps Script" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Google Apps Script</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
