import React from 'react';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const Experience = () => {
  return (
    <section id="experience" className="bg-darkgray">
      <div className="container">
        <h2 className="highlight">
          <i className="fa fa-briefcase icon-3d fa-3dicon text-lightblue me-2"></i>{' '}
          Experience
        </h2>
        <div className="accordion" id="experience-accordion">
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className=" d-flex gap-3 flex-column flex-lg-row align-items-center ">
                  <span className="badge bg-dark p-2">04/2022 - Present</span>
                  <h4 className="p-0 m-0 text-center">Tasmanian Berries</h4>
                  <p className=" p-0 m-0 text-center text-gray">
                    Data Analyst & Web Developer
                  </p>
                </div>
              </button>
              <span className="border_btm"></span>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show border-corners"
              aria-labelledby="headingOne"
              data-bs-parent="#experience-accordion"
            >
              <div className="accordion-body text-gray p-4 p-md-5 bg-dark">
                <ul>
                  <li>
                    Captured and analysed data with a focus on labour costs and
                    performance. Helped the company to make a decision that
                    saved $1,044,598 (12.88%) by transitioning 400+ seasonal
                    workers from casual to part-time.
                  </li>
                  <li>
                    Developed a number of in-house web applications using
                    JavaScript, vanilla CSS, Bootstrap 5, Google Sheets API and
                    Google Apps Script that helped facilitate the effective
                    communication and management of the company. See an example
                    of the{' '}
                    <a
                      href="https://script.google.com/a/u/macros/s/AKfycbzqA_BjxQ2x_JSOjYQ69ayHRxQFZ99iA2w9MhfRoBwZ84tofg-WFEwX7WmbVVxP91LboQ/exec"
                      className="text-lightblue"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PPE Stocktake App
                    </a>
                    .
                  </li>
                  <li>
                    Rebuilt the company website using React and Bootstrap 5. See
                    the result at{' '}
                    <a
                      href="https://tasmanianberries.com.au/"
                      className="text-lightblue"
                      target="_blank"
                      rel="noreferrer"
                    >
                      tasmanianberries.com.au
                    </a>
                    .
                  </li>
                </ul>
              </div>
              <span className="border_btm"></span>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <div className=" d-flex gap-3 flex-column flex-lg-row align-items-center">
                  <span className="badge bg-dark p-2">06/2021 - 04/2022</span>
                  <h4 className="p-0 m-0 text-center">
                    Global Evergreening Alliance
                  </h4>
                  <p className=" p-0 m-0 text-center text-gray">
                    Volunteer Spatial Data Management Officer
                  </p>
                </div>
              </button>
            </div>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse border-corners"
              aria-labelledby="headingTwo"
              data-bs-parent="#experience-accordion"
            >
              <div className="accordion-body text-gray p-4 p-md-5 bg-dark">
                <ul>
                  <li>
                    Helped with the management of spatial data for 200+ global
                    land restoration projects on ArcGIS Online.
                  </li>
                  <li>Created a simple web API for the data using Flask.</li>
                  <li>
                    In two weeks, acquired new web development skills (i.e.
                    HTML, CSS and JavaScript) to develop a{' '}
                    <a
                      href="https://earlybird-dev.github.io/GRM/"
                      className="text-lightblue"
                      target="_blank"
                      rel="noreferrer"
                    >
                      demo website
                    </a>{' '}
                    which allowed the integration of an advanced interactive map
                    and more detailed, easy to read and accessible project
                    profiles.
                  </li>
                </ul>
              </div>
              <span className="border_btm"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
