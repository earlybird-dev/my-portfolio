import React from 'react';
import css1 from '../images/skills/css1.png';
import html2 from '../images/skills/html2.png';
import js2 from '../images/skills/js2.png';
import bootstrap1 from '../images/skills/bootstrap1.png';
import sass1 from '../images/skills/sass1.png';
import reactjs2 from '../images/skills/reactjs2.png';
import sql1 from '../images/skills/sql1.png';
import python2 from '../images/skills/python2.png';
import typescript1 from '../images/skills/typescript1.png';
import git1 from '../images/skills/git1.png';
import data2 from '../images/skills/data2.png';
import gs from '../images/skills/gs.png';
import gas from '../images/skills/gas.png';
import firebase from '../images/skills/firebase.png';

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
              I'm a lifelong learner who love to solve problems and build
              things. I have a solid background in Mathematics, a Master's
              degree in Data Science from Monash University and 2 years of
              experience in Data Analytics and Web Development.
              <span className="border_btm"></span>
            </p>
          </div>
        </div>
        <div className="d-inline-flex flex-wrap align-items-center justify-content-center w-100">
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
              <img src={sass1} alt="SASS" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">SASS</div>
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
              <img src={python2} alt="Python" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Python</div>
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
              <img src={data2} alt="Data Science" className="rounded" />
              <div className="skill-overlay">
                <div className="skill-name">Data Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
