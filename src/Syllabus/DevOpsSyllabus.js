import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
const DevOpsSyllabus = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <NavBar />
    <div className="bg-blue-300 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white text-blue p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-blue-500">DevOps Syllabus</h1>

        {/* Introduction to DevOps */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Introduction to DevOps</h2>
          <ul className="list-disc ml-6">
            <li>What is DevOps?</li>
            <li>DevOps principles and practices</li>
            <li>Benefits of DevOps</li>
          </ul>
        </div>

        {/* Version Control Systems (VCS) */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Version Control Systems (VCS)</h2>
          <ul className="list-disc ml-6">
            <li>Git basics</li>
            <li>Branching and merging</li>
            <li>Github/GitLab</li>
          </ul>
        </div>

        {/* Continuous Integration (CI) */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Continuous Integration (CI)</h2>
          <ul className="list-disc ml-6">
            <li>Introduction to CI/CD</li>
            <li>Jenkins setup and configuration</li>
            <li>Automated testing</li>
          </ul>
        </div>

        {/* Containerization with Docker */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Containerization with Docker</h2>
          <ul className="list-disc ml-6">
            <li>Docker basics</li>
            <li>Building Docker images</li>
            <li>Docker Compose</li>
          </ul>
        </div>

        {/* Orchestration with Kubernetes */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Orchestration with Kubernetes</h2>
          <ul className="list-disc ml-6">
            <li>Kubernetes architecture</li>
            <li>Deploying applications on Kubernetes</li>
            <li>Scaling and managing Kubernetes clusters</li>
          </ul>
        </div>

        {/* Monitoring and Logging */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Monitoring and Logging</h2>
          <ul className="list-disc ml-6">
            <li>Introduction to monitoring tools</li>
            <li>Prometheus and Grafana</li>
            <li>Logging with ELK stack</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
     );
};

export default DevOpsSyllabus;
