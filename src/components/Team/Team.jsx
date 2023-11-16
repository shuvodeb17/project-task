import Title from "../Share/Title/Title";
import TeamCard from "./TeamCard";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Team = () => {

    const teamInfo = [
        {
            images: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon1: <FaLinkedin size={30} />,
            icon2: <FaFacebookF size={30} />
        },
        {
            images: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
            icon1: <FaLinkedin size={30} />,
            icon2: <FaFacebookF size={30} />
        },
        {
            images: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
            icon1: <FaLinkedin size={30} />,
            icon2: <FaFacebookF size={30} />
        },
        {
            images: 'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
            icon1: <FaLinkedin size={30} />,
            icon2: <FaFacebookF size={30} />
        },
        {
            images: 'https://images.unsplash.com/photo-1584940121396-17ed95a72c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
            icon1: <FaLinkedin size={30} />,
            icon2: <FaFacebookF size={30} />
        },
        {
            images: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
            icon1: <FaLinkedin size={30} />,
            icon2: <FaFacebookF size={30} />
        },
    ]

    return (
        <div className="container mx-auto md:px:0 px-5">
            {/* title */}
            <Title sectionName="Team" sectionTitle="Our Amazing Team" />

            {/* single cards */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-11 py-5">
                {
                    teamInfo.map(team => <TeamCard key={team.icon1} team={team} />)
                }
            </div>
        </div>
    );
};

export default Team;