import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-darkgray py-5">
      <div className="container">
        {/* <h2 className="text-center">Skills</h2> */}
        <div className="row">
          <div className="skill-web col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">JavaScript</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-web col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">TypeScript</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-web col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">ReactJS</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-web col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">Sass</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-web col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">Bootstrap</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-web col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">Git</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="skill-data col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">Python</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-data col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">SQL</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
          <div className="skill-data col-6 col-md-4 ">
            <div className="d-flex flex-column p-4">
              <h3 className="m-0">Data Science</h3>
              <p className="text-gray m-0">5 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
