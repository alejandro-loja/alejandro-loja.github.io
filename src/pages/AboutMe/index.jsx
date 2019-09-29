import React from "react";

const styles = {
  imageStyles: {
    height: "150px",
    width: "150px"
  }
};

function AboutMe() {
  return (
    // This main covers the about me and the contact me.
    <div id="main">
      {/* About ME */}
      <div>
        <div className="offset-md-1 col-md-10 offset-sm-1 col-sm-10 shadow bg-white border p-4 clearfix">
          <h2 className="m-3">About Me</h2>

          <hr />

          <div className="mb-5">
            <img
              className="img-thumbnail float-left mr-4 text-wrap"
              style={styles.imageStyles}
              src="assets/images/profilepic-portfolio.jpg"
              alt="Alejandro Loja"
            />
            <p className="p-4">
              Welcome to my portfolio website. Here you will find projects I
              worked on. I have experience with JavaScript, Node.Js, React.JS,
              Express.js, CSS, HTML, MySQL, and MongoDB. I have also developed
              MERN applications. On my portfolio page, I have a list of my most
              recent projects.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className="text-center">
        <div className="offset-md-3 col-md-6 offset-sm-4 col-sm-4 shadow bg-white p-5 mt-4">
          <a
            href="https://github.com/alejandro-loja"
            className="btn btn-dark btn-lg text-white m-1"
          >
            GitHub <i className="fab fa-github-square" />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-loja/"
            className="btn btn-dark btn-lg text-white m-1"
          >
            Linkedin <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:alejandro.loja@gmail.com"
            className="btn btn-dark btn-lg text-white m-1"
          >
            Email <i className="fas fa-envelope-square" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
