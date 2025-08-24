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
                  <span className="badge bg-dark p-2">10/2023 - Present</span>
                  <h4 className="p-0 m-0 text-center">Bulk Nutrients</h4>
                  <p className=" p-0 m-0 text-center text-gray">
                    Data Analyst & Analytics Engineer
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
                    Engineered ELT pipelines integrating 15+ data sources into unified BigQuery data warehouse using dlt and Python, achieving 93% cost reduction through optimised incremental dbt models.
                  </li>
                  <li>
                    Improved existing Power BI reporting system by implementing standardised dashboard templates and optimising report performance across Marketing, R&D, Customer Service, Finance, Production, and Dispatch teams, delivering 20+ enhanced automated reports with increased accuracy and usability, improving user adoption through gamified training systems.
                  </li>
                  <li>
                    Built unified customer intelligence platform consolidating data from 8+ systems (BigCommerce, Zendesk, Klaviyo, GA4, etc.), delivering 360-degree customer timeline access and achieving sub-20 second response times that eliminated platform switching and improved Customer Service team productivity.
                  </li>
                  <li>
                    Developed advanced revenue attribution platform integrating GA4 and Umami analytics with comprehensive customer journey analysis and ROI measurement capabilities, increasing revenue tracking from 85% to 98%, eliminating need for $100k annual external platform.
                  </li>
                  <li>
                    Developed comprehensive A/B testing platform replacing Google Optimize, building automated statistical analysis dashboards with hypothesis testing capabilities that empowered web team to make data-driven decisions on 10+ major website updates.
                  </li>
                  <li>
                    Designed automated fraud detection system analysing 10+ key metrics to identify suspicious order patterns, delivering daily reports with 100% effectiveness in preventing revenue loss from fraudulent transactions.
                  </li>
                  <li>
                    Optimised inventory management operations through predictive forecasting models and out-of-stock monitoring, delivering automated weekly reports for strategic business planning and inventory management that prevented revenue loss and improved supply chain efficiency.
                  </li>
                  <li>
                    Created ML-powered recommendation engine with 117k association rules using historical sales data, delivering personalised product suggestions via high-performance REST API that replaced low-accuracy legacy system.
                  </li>
                  <li>
                    Architected multi-agent BigQuery analytics chatbot using Streamlit and OpenAI Agents SDK, enabling business users to perform complex data analytics through natural language queries.
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
                <div className=" d-flex gap-3 flex-column flex-lg-row align-items-center ">
                  <span className="badge bg-dark p-2">04/2022 - 10/2023</span>
                  <h4 className="p-0 m-0 text-center">Tasmanian Berries</h4>
                  <p className=" p-0 m-0 text-center text-gray">
                    Data Analyst & Web Developer
                  </p>
                </div>
              </button>
              <span className="border_btm"></span>
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
                    Migrated and consolidated 5-year climate and harvest data into BigQuery warehouse, delivering actionable insights through advanced statistical analysis that informed strategic agricultural decisions.
                  </li>
                  <li>
                    Analysed performance data for 350+ seasonal workers using advanced analytics techniques, delivering labour cost optimisation insights that achieved $1.04M savings (12.88% reduction).
                  </li>
                  <li>
                    Developed agricultural business intelligence solution using Looker Studio, delivering interactive dashboards that visualised crop harvest yields, seasonal worker productivity metrics, and weather control data.
                  </li>
                  <li>
                    Engineered comprehensive web application suite using JavaScript, Bootstrap, and Google APIs that streamlined labour management workflows, delivering 18-24% productivity improvements across seasonal workers.
                  </li>
                  <li>
                    Designed strategic planning framework supporting board of directors with data-driven analysis for 5-year expansion plan, providing comprehensive insights to guide company growth strategy across multiple states.
                  </li>
                </ul>
              </div>
              <span className="border_btm"></span>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
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
              id="collapseThree"
              className="accordion-collapse collapse border-corners"
              aria-labelledby="headingThree"
              data-bs-parent="#experience-accordion"
            >
              <div className="accordion-body text-gray p-4 p-md-5 bg-dark">
                <ul>
                  <li>
                    Assisted in managing spatial data for over 200 global land restoration projects on ArcGIS Online, ensuring data accuracy and accessibility for effective decision-making.
                  </li>
                  <li>
                    Developed a user-friendly web API with Flask, enabling seamless access and retrieval of spatial data for analysis and visualisation.
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
