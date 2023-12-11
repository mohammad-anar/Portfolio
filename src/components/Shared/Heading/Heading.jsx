import PropTypes from 'prop-types'; 
const Heading = ({title, subtitle, center}) => {
    return (
        <div className={`space-y-6 ${center && "text-left md:text-center"}`}>
          <div className={`flex items-center gap-1 justify-start ${center && "sm:justify-center"}`}>
            <div className="w-[2px] h-5 bg-primary"></div>
            <div className="w-[2px] h-5 bg-primary"></div>
            <h2 className="text-xl md:text-2xl font-medium ml-4">{subtitle}</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold">{title}</h2>
          </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    center: PropTypes.bool,

}

export default Heading;