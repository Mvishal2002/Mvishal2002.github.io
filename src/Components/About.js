import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var city = data.address.city;
    var state = data.address.state;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Vishal's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>I am a professional game developer with extensive experience and expertise in gameplay optimization, UI, multiplayer, and gameplay mechanics. After developing various hypercasual and AAA mobile games for over 4 years in my <a href="https://drive.google.com/drive/folders/1ka_uQPLmhJJXvaNwIvz6evH-S8YovCv3?usp=sharing" target="_blank" rel="noreferrer"> weekend projects</a> and <a href="https://drive.google.com/drive/folders/1axIemEI04d2rK7sS1HfQKtlU1ty2Jifp?usp=sharing" target="_blank" rel="noreferrer">industrial experiences</a>, I am exploring oppurtunities in console game development for AAA titles and Indie games. Academically, I am a final year undergraduate student of <a href="http://www.iitkgp.ac.in/department/PH" target="_blank" rel="noreferrer">Physics major</a> at <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noreferrer">IIT Kharagpur </a>, where  i enjoy strolling around the campus and participating in various vibrant events whenever I am not developing games or vested in exams.</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} target="_blank" rel="noreferrer" className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
