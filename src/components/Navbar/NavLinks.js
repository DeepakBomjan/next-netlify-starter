import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <Link className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" to="/contactus">
                Contact Us
            </Link>
            <Link className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" to="/about">
                About
            </Link>
           {/* <Link className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" to="#">
                Trainings
            </Link>
    */}
            <Link className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" to="/courselist">
                Popular Courses
            </Link>
          {/*  <Link className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" to="/trainers">
                Trainers
            </Link>
            */}
            <Link className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl" to="#">

                Blogs
            </Link>
        </>
    )
}

export default NavLinks;
