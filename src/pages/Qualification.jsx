import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Qualification = () => {
  return (
    <div className="text-center mt-20 font-bold grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <div>
        <h2 className="text-2xl" style={{ textDecorationLine: "underline" }}>
          <FontAwesomeIcon className="px-2" icon={faBookReader} /> Education
        </h2>
        <ul className="steps steps-vertical">
          <li className="step step-primary">
            American International University Bangladesh (AIUB)
          </li>
          <li className="step step-primary">
            Bachelors Degree in Computer Science
          </li>
          <li className="step step-primary">
            Year of Passing : January 2017 to October 2021
          </li>
        </ul>
      </div>
      <div>
        <h2
          className="text-2xl mb-3"
          style={{ textDecorationLine: "underline" }}
        >
          <FontAwesomeIcon className="px-2" icon={faLaptopCode} /> Skills
        </h2>
        <ul className="steps">
          <li className="step step-primary">Javascript</li>
          <li className="step step-primary">React JS</li>
          <li className="step step-primary">Node JS</li>
          <li className="step step-primary">Express JS</li>
          <li className="step step-primary">Mongo DB</li>
        </ul>
      </div>
    </div>
  );
};

export default Qualification;
