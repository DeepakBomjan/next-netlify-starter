import React from 'react';
import NavBar from '../components/Navbar/NavBar';
const Hero = () => {    
    const handleEnrollNowClick = () => {
        // Redirect to Google Form registration page
        window.open('https://forms.gle/in86LKYEFJRimao1A', '_blank');
    const [heroImage, setHeroImage] = useState("./awsonline.jpg"); // Initial image source
    const [hovered, setHovered] = useState(false);

    const comingSoonCourses = [
        { name: "DevOps", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Cloud Practitioner (Online Class)", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Developer Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "RHEL", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "ORACLE", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Cloud Practitioner", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "Data Analytics and Machine Learning", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdzWTfMvyRM87jKpef0BMQE1FqSoMD3VK_rXQWj1h0wgOSV2Q/viewform?usp=sf_link" }
    ];

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const coursesToDisplay = showAll ? comingSoonCourses : comingSoonCourses.slice(0, 6);

    const changeHeroImage = (newImage) => {
        setHeroImage(newImage);
    };
    
    return (
        <>
            <br />
            <br />
            <br />
            <NavBar />
            <div className="w-screen h-screen text-white" style={{
                background: "#5184d6"
            }}>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
                    <div className="text-center lg:w-1/2">
                        <div className="ml-6">
                            <h1 className="my-4 text-5xl font-bold leading-tight">
                                Welcome to Nnine Training Center
                            </h1>
                            <p className="text-2xl mb-8">
                                Enroll now and get discount up 40% on the occasion on New Year 2081.
                            </p>
                            <button
                                onClick={handleEnrollNowClick}
                                className="hover:bg-red-200 bg-white text-gray-800 font-bold rounded-full py-4 px-8">
                                Enroll Now
                            </button>
            <div className="m-auto mx-4 mt-24 lg:mt-4 p-2 md:p-12" data-aos="zoom-in">
                <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div
                        className="lg:w-1/2 relative bg-blue-200 lg:bg-transparent py-8 rounded-lg overflow-hidden"
                        data-aos="zoom-in" data-aos-delay="200"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={heroImage} alt="Hero" className="rounded-lg w-full" />
                        {hovered && (
                            <a href="https://forms.gle/ujSDDpW5ESqbrLNf9" target='_blank' className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-75 text-white text-2xl font-bold rounded-lg transition duration-300 ease-in-out">
                                Enroll Now
                            </a>
                        )}
                        <div className="max-w-lg w-full p-8 bg-blue-900 text-white text-center rounded-lg absolute bottom-0 left-0 transform translate-x-0 translate-y-full transition duration-300 ease-in-out">
                            <h1 className="text-3xl font-bold mb-4">Together</h1>

                            <p className="text-lg">Empowering Nepal's IT Industry through Training, Placement, and Innovation.</p>
                        </div>
                        <div className="max-w-lg w-full p-8 bg-blue-900 text-white text-center rounded-lg absolute bottom-0 left-0 transform translate-x-0 translate-y-full transition duration-300 ease-in-out">
                            <p className="text-sm mt-2">
                             Register Here: https://forms.gle/7EpqaZr8ER23gz596</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
