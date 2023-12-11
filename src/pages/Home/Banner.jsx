
import bannerimage from "../../assets/bannerimage.png"
import Resume from "../../components/Shared/Resume/Resume";

const Banner = () => {
    return (
        <section id="banner" className="px-12 lg:px-20 min-h-[400px] bg-navbar-bg bg-opacity-80 flex items-center overflow-hidden">
        <div className=" flex-1 h-full flex flex-col  justify-center -mt-12 ">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary">Hi! I&apos;m</h2>
            <h1 className="text-3xl md:text-5xl font-bold">MD. ANARUL ISLAM</h1>
          </div>
          <p className="text-lg mt-4">
             Junior front-end (MERN Stack) developer.
          </p>
          <div className="mt-8">
            <Resume/>
          </div>
        </div>
        <div className="hidden sm:flex  items-end h-full justify-end w-full flex-1">
            <img className="object-cover -mb-14 lg:mb-0" src={bannerimage} alt="banner image" />
        </div>
      </section>
    );
};

export default Banner;