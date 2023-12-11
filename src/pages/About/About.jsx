import Heading from "../../components/Shared/Heading/Heading";
import { SlEnergy } from "react-icons/sl";
import { TfiCup } from "react-icons/tfi";
import educationIcon from "../../assets/education.png";
import { BiSolidInstitution } from "react-icons/bi";
import Resume from "../../components/Shared/Resume/Resume";
const About = () => {
  return (
    <section id="about" className="px-12 py-20 lg:px-20  bg-slate-800  my-2">
      <Heading
        title="Crafting stories about my ambission"
        subtitle="About me"
        center={true}
      />
      <div className="flex flex-col md:flex-row items-start space-y-12 gap-5 my-12 mt-20">
        {/* ambition  */}
        <div className="space-y-5">
          <div className="text-primary">
            <SlEnergy size={50} />
          </div>
          <h2 className="text-3xl font-medium">My ambition</h2>
          <p className="text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed thisnquia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet
          </p>
        </div>
        {/* purpost  */}
        <div className="space-y-5 ">
          <div className="text-primary mt-0 md:-mt-10 ">
            <TfiCup size={38} />
          </div>
          <h2 className="text-3xl font-medium">My purpose</h2>
          <p className="text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed thisnquia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet
          </p>
        </div>
      </div>
      {/* education  */}
      <div>
        <img className="w-[50px]" src={educationIcon} alt="icon" />
        <h2 className="text-3xl font-medium">Education</h2>
        <div className="flex flex-col md:flex-row gap-5 my-5">
          {/* card 1  */}
          <div className="card  border border-slate-700 text-white rounded-md">
            <div className="card-body space-y-1">
              <h2 className="text-xl font-semibold  border-b-[2px] border-b-primary w-16 pb-2">
                SSC
              </h2>
              <h2 className="text-2xl font-medium flex items-end gap-2"><BiSolidInstitution className="text-primary" size={30}/> Taldighi ML High School</h2>
              <p className="font-semibold text-primary">2018-2019</p>
              <p>
                I&apos;m enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit sed thisnquia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt
              </p>
            </div>
          </div>
          {/* card 1  */}
          <div className="card  border border-slate-700 text-white rounded-md">
            <div className="card-body space-y-1">
              <h2 className="text-xl font-semibold  border-b-[2px] border-b-primary w-60 pb-2">
                Diploma in Engineering
              </h2>
              <h2 className="text-2xl font-medium flex items-end gap-2"><BiSolidInstitution className="text-primary" size={30}/> Mymensingh Poytechnic Institute</h2>
              <p className="font-semibold text-primary">2019-2023</p>
              <p>
                I&apos;m enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit sed thisnquia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
        <Resume/>
        </div>
      </div>
    </section>
  );
};

export default About;
