import about from "../images/myabout.png";
const About = () => {
  return (
    <div className="hero h-screen lg:h-[50vh]  mt-5 rounded">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:h-[50vh] shrink-0">
          <img
            src={about}
            className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
            alt="about"
          />
        </div>
        <div className="max-w-lg mx-5">
          <h1 className="text-3xl font-bold">Hi I am S M RAHID HAQUE</h1>
          <p className="py-6 max-w-xs">
            I have graduated from AIUB. I am looking for an web development
            position. I am skilled in javascript, HTML5, CSS3. I am very
            passionate about making web applications. I want to make people's
            life easier by making useful applications which will benefit the
            society.
          </p>
          <a
            href="/CV-SM-RAHID-HAQUE.pdf"
            download="CV-SM-RAHID-HAQUE.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
