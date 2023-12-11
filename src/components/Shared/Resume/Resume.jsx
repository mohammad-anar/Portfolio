import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../../../assets/resume.pdf"

const Resume = () => {
  return (
    <div>
      <a href={resume} download="resume">
        <button className="border flex items-center border-primary text-primary gap-2 text-lg capitalize rounded-full p-2 px-4 font-medium btn btn-outline hover:text-white hover:bg-primary hover:border-0 duration-500">
          Get Resume <MdOutlineFileDownload size={25} />
        </button>
      </a>
    </div>
  );
};

export default Resume;
