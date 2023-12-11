import Heading from "../../components/Shared/Heading/Heading";

const Experience = () => {
    return (
        <section
        id="experience"
        className="px-12 py-20 lg:px-20  bg-slate-800 flex flex-col md:flex-row items-center gap-32 md:gap-4 "
      >
        {/* left */}
        <div className="basis-1/2">
          <Heading title={"My experience field here"} subtitle={"Experience"}/>
        </div>
        {/* right  */}
        <div className="basis-1/2 w-full space-y-6 text-white">
        {/* card 1  */}
          <div className="bg-slate-700 p-8 space-y-8">
            <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">Communication</h2>
            <h2>80%</h2>
            </div>
            <progress className="progress " value="80" max="100"></progress>
          </div>
        {/* card 1  */}
          <div className="bg-slate-700 p-8 space-y-8">
            <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">Leadership</h2>
            <h2>75%</h2>
            </div>
            <progress className="progress " value="75" max="100"></progress>
          </div>
        {/* card 1  */}
          <div className="bg-slate-700 p-8 space-y-8">
            <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">Team work</h2>
            <h2>85%</h2>
            </div>
            <progress className="progress " value="85" max="100"></progress>
          </div>
        {/* card 1  */}
          <div className="bg-slate-700 p-8 space-y-8">
            <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">Flexibility</h2>
            <h2>90%</h2>
            </div>
            <progress className="progress " value="90" max="100"></progress>
          </div>
        </div>
      </section>
    );
};

export default Experience;