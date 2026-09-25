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

          <p>I’m a professional game developer with experience building AAA mobile and hypercasual games, specializing in gameplay systems, AI, multiplayer, physics, and, optimization. Over the past four years, I’ve worked on both personal projects and professional teams, including as a founding engineer on ECricket at Lightfury Games. I’m now looking to bring that experience to console game development, contributing to ambitious AAA or indie titles. I hold an Integrated M.Sc. in Physics from IIT Kharagpur, where I developed the analytical foundation that continues to shape how I approach game development.</p>
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
