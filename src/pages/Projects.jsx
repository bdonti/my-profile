import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
const Projects = () => {
  return (
    <div>
      <h2 className="font-bold text-center my-20 text-2xl">Projects</h2>
      <div className="flex justify-center items-center gap-6 my-5">
        <div className="card w-96 shadow-xl">
          <figure>
            <img src={project1} alt="Project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              WorkFlow Hub
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="my-2">
              The WorkFlow Hub is a web application designed to streamline
              employee and HR operations within an organization.
            </p>
            <p>
              Features: <br />
              <ul className="list-disc list-inside ml-2">
                <li>
                  There is a dashboard for each users and there will be
                  different view for admin, employee and hr by conditional
                  rendering.
                </li>
                <li>
                  Admin can fire any employee which makes the worker unable to
                  log in the website.
                </li>
                <li>
                  HR can pay out employees and can see the detailed chart of
                  each employees progression.
                </li>
              </ul>
            </p>
            <div className="card-actions justify-start my-4">
              <a
                href="https://github.com/bdonti/workflow-hub-client"
                className="badge badge-primary"
              >
                GitHub
              </a>
              <a
                href="https://hr-workflow-hub.web.app/"
                className="badge badge-primary"
              >
                Live Site
              </a>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">ReactJS</div>
              <div className="badge badge-outline">NodeJS</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Lottie Animation</div>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl">
          <figure>
            <img src={project2} alt="Project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Travel Tribe
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="my-2">
              Travel Tribe aims to be a comprehensive platform for travelers
              focusing on European destinations, providing a personalized and
              user-friendly interface to discover, manage, and share tourist
              spots.
            </p>
            <p>
              Features: <br />
              <ul className="list-disc list-inside ml-2">
                <li>
                  You can add tourist spot and store in our database for
                  different region which is based on your email will be stored
                  in database
                </li>
                <li>
                  You can also see all the tourist based on countries from the
                  homepage which will give you some clear what can you expect
                  from each countries
                </li>
                <li>You can book tourist spot for your destination.</li>
              </ul>
            </p>
            <div className="card-actions justify-start my-4">
              <a
                href="https://github.com/bdonti/travel-tribe-client"
                className="badge badge-primary"
              >
                GitHub
              </a>
              <a
                href="https://travel-tribe-1cef3.web.app/"
                className="badge badge-primary"
              >
                Live Site
              </a>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">ReactJS</div>
              <div className="badge badge-outline">NodeJS</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Lottie Animation</div>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl">
          <figure>
            <img src={project3} alt="Project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Product Galaxy
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="my-2">
              Product Galaxy website aims to create a vibrant and helpful
              community where users can seek and provide product
              recommendations, ultimately aiding in better purchasing decisions.
            </p>
            <p>
              Features: <br />
              <ul className="list-disc list-inside ml-2">
                <li>Logged User can add, update, delete his/her query</li>
                <li>
                  User can get best purchasing decision based on recommendation
                  and other user can also modify or delete their queries.
                </li>
                <li>User can also view other users queries</li>
              </ul>
            </p>
            <div className="card-actions justify-start my-4">
              <a
                href="https://github.com/bdonti/product-galaxy-client"
                className="badge badge-primary"
              >
                GitHub
              </a>
              <a
                href="https://product-galaxy.web.app/"
                className="badge badge-primary"
              >
                Live Site
              </a>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">ReactJS</div>
              <div className="badge badge-outline">NodeJS</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Lottie Animation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
