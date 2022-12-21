import React from 'react';
import avatar from '../avatar.jpg';

const Footer = () => {
  return (
    <>
      <footer id="contact" className="footer py-5">
        <div className="container ">
          <div className="row g-2">
            <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
              <img src={avatar} alt="logo" className="rounded-circle" />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-center">
                <span>Let's Connect</span>
              </h2>
              <p className="text-center px-5">
                If you find my portfolio interesting!
              </p>
            </div>

            <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
              <div className="footer-social d-flex align-items-center justify-content-center gap-1">
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
              <div>
                <a href="https://early-bird.dev/">early-bird.dev</a>{' '}
                <span>|</span> <a href="https://trung-ha.dev/">trung-ha.dev</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
