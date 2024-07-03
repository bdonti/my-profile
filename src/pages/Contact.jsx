import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faPhone,
  faMailBulk,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_lj4dzk4",
        "template_svrzcpr",
        {
          name: data.name,
          email: data.email,
          description: data.description,
        },
        "YZkh73B_-_TS8re0K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Contacted Successfully");
    reset();
  };

  return (
    <div>
      <h2 className="font-bold text-center my-20 text-2xl">Contact Now</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="card bg-base-100 shadow-xl mb-0 sm:mb-5">
          <div className="card-body">
            <h2 className="card-title">Contact Infos</h2>
            <p className="py-2">
              <FontAwesomeIcon className="px-2" icon={faLandmark} /> 76
              Segunbagicha
            </p>
            <p className="py-2">
              <FontAwesomeIcon className="px-2" icon={faPhone} /> 01747300237
            </p>
            <p className="py-2">
              <FontAwesomeIcon className="px-2" icon={faMailBulk} />{" "}
              ontirahid80@gmail.com
            </p>
            <p className="py-2">
              <FontAwesomeIcon className="px-2" icon={faShareFromSquare} />
              <a
                className="px-2"
                href="https://www.linkedin.com/in/sm-rahid-haque-43bb232ab"
              >
                <FaLinkedinIn className="inline" />
              </a>
              <a className="px-2" href="https://www.facebook.com/rahid.onti">
                <FaFacebook className="inline" />
              </a>
            </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Your Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-warning">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Your Email is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-warning">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Write your message",
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className="label-text-alt text-warning">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn btn-primary w-full max-w-xs text-white font-bold"
                type="submit"
                value="Contact"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
