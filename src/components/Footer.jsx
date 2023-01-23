import React, { useState } from 'react';

// Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Config
const firebaseConfig = {
  apiKey: 'AIzaSyCA8nSuNZ4rwDt6fbng5o5eIyIbuNi39Yg',
  authDomain: 'early-bird-dev-2022.firebaseapp.com',
  projectId: 'early-bird-dev-2022',
  storageBucket: 'early-bird-dev-2022.appspot.com',
  messagingSenderId: '269699165192',
  appId: '1:269699165192:web:177e0c5986f926db74b5bd',
  measurementId: 'G-45KF3ZGBQ1',
  databaseURL:
    'https://early-bird-dev-2022.australia-southeast1.firebasedatabase.app/',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DEBUG = true;

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [verification, setVerification] = useState('');
  const timestamp = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10);

    DEBUG &&
      console.log({
        name: name,
        email: email,
        message: message,
        timestamp: timestamp,
      });

    if (!verification) {
      if (name + email + message) {
        setDoc(doc(db, 'enquiry', randomId), {
          name: name,
          email: email,
          message: message,
          timestamp: timestamp,
        });
        setName('');
        setEmail('');
        setMessage('');
        setVerification('');
      }
    }
  };
  return (
    <>
      <footer id="contact" className="footer">
        <div className="container ">
          <div className="row g-2">
            <div className="col-12">
              <h2>
                <i className="fa fa-grav fa-3dicon text-lightblue me-2"></i>{' '}
                Let's Connect
              </h2>
            </div>
            <div className="col-12">
              <div className="">
                <form
                  action="?"
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  className="contactForm"
                  noValidate
                >
                  <div className="row g-2 pb-5">
                    <div className="col-md-6">
                      <div className="form-group input-group">
                        <span className="input-group-text px-3">
                          <i className="fa fa-user-o"></i>
                        </span>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={name}
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group">
                        <span className="input-group-text px-3">
                          <i className="fa fa-at"></i>
                        </span>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          value={email}
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group input-group">
                        <span className="input-group-text px-3">
                          <i className="fa fa-quote-right"></i>
                        </span>
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          name="message"
                          className="form-control"
                          id="message"
                          rows="5"
                          value={message}
                          placeholder="Message"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 d-none">
                      <div className="form-group">
                        <label className="label" htmlFor="verification">
                          Are you a robot?
                        </label>
                        <input
                          onChange={(e) => setVerification(e.target.value)}
                          type="text"
                          className="form-control"
                          name="verification"
                          id="verification"
                          value={verification}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="form-group">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="btn btn-warning btn3d text-white"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 d-flex flex-column align-items-center justify-content-center p-3 p-md-5 mb-5 text-gray bg-dark clipPath--mtn2--T pad--5T">
              <div className="footer-social d-flex align-items-center justify-content-center gap-1">
                <a
                  href="https://github.com/earlybird-dev"
                  rel="noreferrer"
                  target="_blank"
                  className="p-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <i className="fa fa-github fa-3dicon text-lightblue mb-3"></i>
                  <p className="">Github</p>
                </a>
                <a
                  href="https://au.linkedin.com/in/trungha-nguyen"
                  rel="noreferrer"
                  target="_blank"
                  className="p-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <i className="fa fa-linkedin fa-3dicon text-lightblue mb-3"></i>
                  <p className="">LinkedIn</p>
                </a>
                <a
                  href="mailto:trungha.dev@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="p-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <i className="fa fa-envelope fa-3dicon text-lightblue mb-3"></i>
                  <p className="">Email</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
