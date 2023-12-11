import Heading from "../../components/Shared/Heading/Heading";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import api from "../../assets/api.png"

const Skills = () => {
  return (
    <section id="skills" className="px-12 py-20 lg:px-20  bg-slate-800 my-2 space-y-12">
      <Heading title={"My Skills here"} subtitle={"Skills"} center={true} />

      {/* languages  */}
      <div className="my-12 mt-20">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <div className="my-6 flex items-center gap-6 flex-wrap">
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-yellow-500 flex gap-3 items-center">
              <IoLogoJavascript size={25} />
              <h2 className="text-lg font-medium text-white">JAVASCRIPT</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4  px-8 inline-block rounded-full">
            <div className=" text-red-500 flex gap-3 items-center">
              <FaHtml5 size={25} />
              <h2 className="text-lg font-medium text-white">HTML</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-blue-500 flex gap-3 items-center">
              <FaCss3 size={25} />
              <h2 className="text-lg font-medium text-white">CSS</h2>
            </div>
          </div>
        </div>
      </div>
      {/* technology  */}
      <div>
        <h2 className="text-2xl font-semibold">Technology</h2>
        <div className="my-6 flex items-center gap-6 flex-wrap">
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-[#25CCF7] flex gap-3 items-center">
              <FaReact size={25} />
              <h2 className="text-lg font-medium text-white">React</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-green-500 flex gap-3 items-center">
              <FaNodeJs size={25} />
              <h2 className="text-lg font-medium text-white">Node.js</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-black flex gap-3 items-center">
              <SiExpress className="text-slate-400" size={25} />
              <h2 className="text-lg font-medium text-white">Express.js</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-yellow-500 flex gap-3 items-center">
            <img className="w-[30px] " src={api} alt="" />
              <h2 className="text-lg font-medium text-white">Context API</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-green-500 flex gap-3 items-center">
              <SiMongodb size={25} />
              <h2 className="text-lg font-medium text-white">Mongodb</h2>
            </div>
          </div>
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-teal-500 flex gap-3 items-center">
              <SiTailwindcss size={25} />
              <h2 className="text-lg font-medium text-white">Tailwindcss</h2>
            </div>
          </div>
        </div>
      </div>
      {/* tools  */}
      <div>
        <h2 className="text-2xl font-semibold">Tools</h2>
        <div className="my-6 flex items-center gap-6">
          {/* 1 */}
          <div className="bg-slate-700 p-4 px-8 inline-block shadow-md rounded-full">
            <div className=" text-yellow-500 flex gap-3 items-center">
              <IoLogoFirebase size={25} />
              <h2 className="text-lg font-medium text-white">Firebase</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
