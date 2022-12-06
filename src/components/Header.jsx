import React from 'react';
import logo from '../logo.png';
import sun from '../sun.png';

const Header = () => {
  return (
    <>
      <header className="header container mb-5 min-vh-100">
        <div className="navbar d-flex flex-column-reverse flex-sm-row justify-content-between mb-1 mb-sm-5">
          <div className="navbar-name">early-bird.dev</div>
          <div className="navbar-social d-flex gap-2 gap-md-4 pb-1 pb-md-3">
            <a
              href="https://github.com/earlybird-dev"
              rel="noreferrer"
              target="_blank"
              className="p-2"
            >
              <i className="fa fa-github icon-3d"></i>
            </a>
            <a
              href="https://au.linkedin.com/in/trungha-nguyen"
              rel="noreferrer"
              target="_blank"
              className="p-2"
            >
              <i className="fa fa-linkedin icon-3d"></i>
            </a>
            <a
              href="mailto:trungha.dev@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="p-2"
            >
              <i className="fa fa-envelope icon-3d"></i>
            </a>
          </div>
        </div>
        <div className="intro d-flex flex-column gap-4">
          <div className="logo d-flex align-items-center justify-content-center animate__animated  animate__lightSpeedInRight animate__delay-1s">
            <img src={logo} alt="logo" className="" />
          </div>
          {/* <div className="logo sun d-flex align-items-center justify-content-center animate__animated  animate__bounceOutDown animate__delay-2s">
            <img src={sun} alt="sun" className="" />
          </div> */}
          <div>
            <h1>Nice to meet you!</h1>
            <h1>
              I'm <span>Trung Ha</span>
            </h1>
          </div>
          <p className="">
            Based in Australia, I'm a front-end developer passionate about
            building accessible web apps that users love. Happy to relocate to
            anywhere in the country.
          </p>
          <div className="d-flex flex-column ">
            <a href="#skills" className="">
              Skills
            </a>
            <a href="#projects" className="">
              Projects
            </a>
            <a href="#experience" className="">
              Experience
            </a>
            {/* <a href="#contact" className="">
              Contact Me
            </a> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;