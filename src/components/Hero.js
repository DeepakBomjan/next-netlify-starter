import React from 'react';
//import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import CourseCard from './CourseCard';
//import heroImg from '../images/comingsoon.jpg'; 
//import heroImg1 from '../images/N91.png'; 

const Hero = () => {
    const comingSoonCourses = [
        { name: "DevOps", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link" },
        { name: "AWS Solution Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLScfpMOlQksn6qyIQtHo4Eknbni88NXpFnBl56bEVchhFB53tg/viewform?usp=sf_link" },
        { name: "AWS Developer Associate", formLink: "https://docs.google.com/forms/d/e/1FAIpQLScoazEGOKT9Za3PRlKq6casljxztZYNg8-tOcbrGeJCtXIi2Q/viewform?usp=sf_link" },
        { name: "RHEL", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfpQ-jJxF2LfCa3nm2nEaY8xEg1wmphzqzZksBzzivJSvjojg/viewform?usp=sf_link" },
        { name: "ORACLE", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdIRfrK--iA_QdhnJRidi7ngxF4qnuXqdPe8evPvMXCunuJIQ/viewform?usp=sf_link" },
        { name: "AWS Cloud Practitioner", formLink: "https://docs.google.com/forms/d/e/1FAIpQLScuRKWyz3tk0FO_wlnwgqp4RpptnAEgG5M2vQTNaVAjXoNcgw/viewform?usp=sf_link" },
        { name: "Data Analytics and Machine Learning", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdzWTfMvyRM87jKpef0BMQE1FqSoMD3VK_rXQWj1h0wgOSV2Q/viewform?usp=sf_link" }
    ];
    return (
        <div className="hero" id='hero'>
            <div>
                <NavBar />
            </div>

            <div className="m-auto overflow-hidden mx-4 mt-24 lg:mt-4 p-2 md:p-12 h-screen" data-aos="zoom-in">
                <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                <div className="lg:w-1/2 flex flex-col justify-center items-center bg-blue-200 lg:bg-transparent py-8 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
                  <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900 text-center">
                    IT Training <br className="hidden lg:block"/> and <br className="hidden lg:block"/>Services
                 </h1>
                </div>


                    <div className="lg:w-1/2 overflow-y-auto" style={{ maxHeight: '400px' }} data-aos="fade-up" data-aos-delay="700">
                        <div className="text-left">
                            <h1 className="mb-5 md:text-3xl text-2xl font-bold text-blue-900">Upcoming Classes:</h1>
                            <div>
                                {comingSoonCourses.map((course, index) => (
                                    <CourseCard key={index} course={course} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    {/* Additional content below courses if needed */}
                </div>
            </div>
        </div>
    );
};

export default Hero;