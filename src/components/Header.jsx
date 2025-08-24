import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header min-vh-100 pb-5">
        <div id="sky" className="m-0">
          <div id="sunrise" className="min-vh-100 m-0">
            <div className="sun"></div>
            <div className="bird1-l"></div>
            <div className="bird1-r"></div>
            <div className="bird2-l"></div>
            <div className="bird2-r"></div>
            <div className="bird3-l"></div>
            <div className="bird3-r"></div>
          </div>
          <div className="container-fluid m-0 position-relative">
            <div id="clouds" className="min-vh-100">
              <div className="cloud x1 shadow"></div>
              <div className="cloud x2 shadow"></div>
              <div className="cloud x3 shadow"></div>
              <div className="cloud x4 shadow"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            id="navbar"
            className="p-3 fixed-top d-flex justify-content-between animate__animated animate__backInDown animate__delay-1s"
          >
            <div className="navbar-name">
              <a href="/#" className="">
                early-bird.dev
              </a>
            </div>
            <div className="navbar-items d-none d-md-flex align-items-center justify-content-center ">
              <a href="#skills" className="mx-2 pb-2">
                <i className="navbar-item px-2">Skills</i>
              </a>
              <a href="#projects" className="mx-2 pb-2">
                <i className="navbar-item px-2">Projects</i>
              </a>
              <a href="#experience" className="mx-2 pb-2">
                <i className="navbar-item px-2">Experience</i>
              </a>
              <a href="#contact" className="mx-2 pb-2">
                <i className="navbar-item px-2">Contact Me</i>
              </a>
            </div>
            <div className="navbar-items d-flex d-md-none align-items-center justify-content-center">
              <a href="#skills" className="mx-2 pb-2">
                <i className="fa fa-key fa-3dicon text-lightblue"></i>
              </a>
              <a href="#projects" className="mx-2 pb-2">
                <i className="fa fa-code fa-3dicon text-lightblue"></i>
              </a>
              <a href="#experience" className="mx-2 pb-2">
                <i className="fa fa-briefcase fa-3dicon text-lightblue"></i>
              </a>
              <a href="#contact" className="mx-2 pb-2">
                <i className="fa fa-grav fa-3dicon text-lightblue"></i>
              </a>
            </div>
          </div>
          <div
            id="intro"
            className="min-vh-100 d-flex justify-content-center flex-column gap-4"
          >
            <div className="d-flex flex-column gap-3 align-items-center justify-content-center animate__animated  animate__lightSpeedInLeft animate__delay-1s">
              <h1>Nice to meet you!</h1>
              <h1 className=" intro-name">
                I'm <span>T</span>
                <span>r</span>
                <span>u</span>
                <span>n</span>
                <span>g</span> <span>H</span>
                <span>a</span>
              </h1>
              <p className="text-center mt-4 p-4 p-md-5 p-3 p-md-5 border-corners bg-dark">
                Data Analyst & Analytics Engineer with 3+ years of experience delivering comprehensive data solutions and actionable business intelligence.
                <span className="border_btm"></span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
