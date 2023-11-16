import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center h-screen">
                <AboutLeft />

                <AboutRight />
            </div>
        </div>
    );
};

export default About;