import Heading from "../../components/Shared/Heading/Heading";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaVoicemail } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("submtted",data);
  };
  return (
    <div className="px-12 py-20 lg:px-20  bg-slate-800 mt-2">
      <Heading
        title="If any question or need help?"
        subtitle="Contact me"
        center={true}
      />
      <div className="space-y-12 my-6 mt-20">
        {/* info  */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* card 1  */}
          <div className="card flex-1 w-full  border border-slate-700 text-white rounded-md text-center">
            <div className="card-body space-y-1">
              <IoPhonePortraitOutline
                size={50}
                className="mx-auto mb-4 text-primary"
              />
              <h2 className="text-2xl font-medium text-primary">Phone</h2>
              <h2 className="text-lg font-bold">Thursday-Sunday</h2>
              <h2 className="text-lg"> 01519601128</h2>
            </div>
          </div>
          {/* card 1  */}
          <div className="card flex-1 w-full border border-slate-700 text-white rounded-md text-center">
            <div className="card-body space-y-1">
              <FaMapLocationDot
                size={50}
                className="mx-auto mb-4 text-primary"
              />
              <h2 className="text-2xl font-medium text-primary">Phone</h2>
              <h2 className="text-lg font-bold">Thursday-Sunday</h2>
              <h2 className="text-lg"> 01519601128</h2>
            </div>
          </div>
          {/* card 1  */}
          <div className="card flex-1 border w-full border-slate-700 text-white rounded-md text-center">
            <div className="card-body space-y-1">
              <FaVoicemail size={50} className="mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-medium text-primary">Phone</h2>
              <h2 className="text-lg font-bold">Thursday-Friday</h2>
              <h2 className="text-lg"> 01519601128</h2>
            </div>
          </div>
        </div>
        {/* form  */}
        <div>
          <Heading subtitle="Get in touch" />
          <div className="flex flex-col items-center justify-center">
            <form
              className="flex flex-col items-center shadow-xl w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* input 1  */}
              <div className="flex items-end flex-col md:flex-row w-full gap-5">
                <div className="w-full">
                  <label className="font-bold mb-2 inline-block" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border bg-transparent border-slate-700 outline-0 rounded-lg w-full p-4 outline-gray-400"
                    {...register("name", { required: true })}
                    placeholder="Enter your name "
                  />
                  {errors.name && (
                    <span className="text-red-600 text-sm">
                      Name is required
                    </span>
                  )}
                </div>
                {/* input 3  */}
                <div className="w-full mt-4">
                  <label
                    className="font-bold mb-2 inline-block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border bg-transparent border-slate-700 outline-0 rounded-lg w-full p-4 outline-gray-400"
                    {...register("email", { required: true })}
                    placeholder="Enter your email "
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">
                      email is required
                    </span>
                  )}
                </div>
              </div>
              {/* input 1  */}
              <div className="flex items-end flex-col md:flex-row w-full gap-5">
                {/* input 3  */}
                <div className="w-full mt-4">
                  <label
                    className="font-bold mb-2 inline-block"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="border bg-transparent border-slate-700 outline-0 rounded-lg w-full p-4 outline-gray-400"
                    {...register("phone", { required: true })}
                    placeholder="Enter your phone "
                  />
                  {errors.phone && (
                    <span className="text-red-600 text-sm">
                      phone is required
                    </span>
                  )}
                </div>
                {/* input 4  */}
                <div className="w-full mt-4">
                  <label
                    className="font-bold mb-2 inline-block"
                    htmlFor="website"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="border bg-transparent border-slate-700 outline-0 rounded-lg w-full p-4 outline-gray-400"
                    {...register("website", { required: true })}
                    placeholder="Enter your website "
                  />
                  {errors.website && (
                    <span className="text-red-600 text-sm">
                      website is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-end flex-col md:flex-row w-full gap-5">
                <div className="w-full mt-4">
                  <label
                    className="font-bold mb-2 inline-block"
                    htmlFor="website"
                  >
                    Website
                  </label>

                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    className="textarea focus:border border-slate-700  bg-transparent resize-none outline-none border focus:outline-none w-full p-2 "
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-600 text-sm">
                      message is required
                    </span>
                  )}
                </div>
              </div>

              <input
                type="submit"
                value={"Send"}
                className="btn bg-primary rounded-lg hover:bg-blue-400 text-white font-bold w-full mt-4 "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
