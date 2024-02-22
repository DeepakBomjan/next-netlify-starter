import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const MERNStackSyllabus = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">MERN Stack Development Syllabus</h1>

            <h2 className="text-xl text-red-500 font-bold mb-4">1. Frontend Development with React.js</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.1 Introduction to React.js</h3>
            <p className="text-black ml-8">
              Overview of React.js, Virtual DOM, JSX syntax, component-based architecture.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.2 React Components and Props</h3>
            <p className="text-black ml-8">
              Creating functional and class components, passing props, state management.
            </p>
            {/* Continue with more topics under Frontend Development with React.js */}

            <h2 className="text-xl text-red-500 font-bold mb-4">2. Backend Development with Node.js and Express.js</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.1 Introduction to Node.js</h3>
            <p className="text-black ml-8">
              Setting up Node.js, event-driven architecture, npm package management.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.2 Building RESTful APIs with Express.js</h3>
            <p className="text-black ml-8">
              Creating routes, handling HTTP requests, middleware, error handling.
            </p>
            {/* Continue with more topics under Backend Development with Node.js and Express.js */}

            <h2 className="text-xl text-red-500 font-bold mb-4">3. Database Management with MongoDB</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">3.1 Introduction to MongoDB</h3>
            <p className="text-black ml-8">
              NoSQL databases, MongoDB basics, CRUD operations, data modeling.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">3.2 Integrating MongoDB with Node.js</h3>
            <p className="text-black ml-8">
              Using Mongoose ODM, connecting to MongoDB, defining schemas, querying data.
            </p>
            {/* Continue with more topics under Database Management with MongoDB */}

            <h2 className="text-xl text-red-500 font-bold mb-4">4. Full Stack Development with MERN</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">4.1 Building a MERN Stack Application</h3>
            <p className="text-black ml-8">
              Integrating frontend and backend, authentication, authorization, deployment.
            </p>
            {/* Continue with more topics under Full Stack Development with MERN */}

            <h2 className="text-xl text-red-500 font-bold mb-4">5. Advanced Topics</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">5.1 State Management with Redux</h3>
            <p className="text-black ml-8">
              Setting up Redux, managing global state, asynchronous actions.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">5.2 Real-time Communication with WebSockets</h3>
            <p className="text-black ml-8">
              Implementing WebSocket communication, building chat applications.
            </p>
            {/* Continue with more advanced topics */}

            {/* Add more sections and topics as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MERNStackSyllabus;
