import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const DevOpsSyllabus = () => {
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
            <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">DevOps Syllabus</h1>

            <h2 className="text-xl text-red-500 font-bold mb-4">COURSE OUTLINE</h2>

            <h2 className="text-xl text-red-500 font-bold mb-4">Introduction</h2>
            <p className="text-black ml-8">
              Course Features and Tools<br />
              What is DevOps?<br />
              A brief overview of the history of DevOps
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">DevOps Culture</h2>
            <p className="text-black ml-8">
              The Goals of DevOps<br />
              DevOps vs Traditional Silos
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">DevOps Concepts and Practises</h2>
            <p className="text-black ml-8">
              Build Automation<br />
              Continuous Integration<br />
              Continuous Delivery and Continuous Deployment<br />
              Infrastructure as Code<br />
              Configuration Management<br />
              Container Orchestration<br />
              Monitoring<br />
              Microservices
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">DevOps Tools</h2>
            <p className="text-black ml-8">
              Introduction to DevOps Tools<br />
              Tools for Build Automation and Continuous Integration<br />
              Tools for Configuration Management<br />
              Tools for Virtualization and Containerization<br />
              Tools for Monitoring<br />
              Tools for Orchestration<br />
              Source Code Management
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">Git Basics</h2>
            <p className="text-black ml-8">
              The Basics of Using Git<br />
              Understanding the Git Filesystem<br />
              Creating a Local Repository (Empty)<br />
              Basic Configuration of Git<br />
              Adding Files to Project<br />
              The Status of your project<br />
              Commiting to Git<br />
              Ignoring Certain File Types
            </p>

            {/* Include content for remaining chapters with similar structure */}

            <h2 className="text-xl text-red-500 font-bold mb-4">Docker Community Edition Installation and Configuration</h2>
            <p className="text-black ml-8">
              Intalling Docker Community Edition<br />
              Docker Basics<br />
              Docker Commands<br />
              Creating Containers<br />
              Exposing Container Ports<br />
              Executing Container Commands<br />
              Docker Logging<br />
              Networking<br />
              Storage and Volumes<br />
              Selecting a Storage Driver<br />
              Running a Container<br />
              Namespaces and Cgroups
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">Image Creation, Management, and Registry</h2>
            <p className="text-black ml-8">
              Introduction to Docker Images<br />
              The Compoments of a Dockerfile<br />
              More Dockerfile Directives<br />
              Building Efficient Images<br />
              Managing Images<br />
              Flattening a Docker Image to a Single Layer<br />
              Introduction to Docker Registries<br />
              Using Docker Registries
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">Docker Compose</h2>
            <p className="text-black ml-8">
              Introduction to Docker Service<br />
              Compose Commands<br />
              Creating a Compose File<br />
              Using Volumes and Networking with Compose
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">Kubernetes - Container Orchestrator</h2>
            <p className="text-black ml-8">
              Kubernetes Fundamentals<br />
              Kubernetes Networking<br />
              Kubernetes Storage<br />
              Kubernetes Deployments<br />
              RBAC and Admission Control<br />
              Troubleshooting<br />
              Monitoring and Logging
            </p>

            <h2 className="text-xl text-red-500 font-bold mb-4">DevOps and the Cloud</h2>
            <p className="text-black ml-8">
              DevOps and Google Cloud Platform<br />
              DevOps and Microsoft Azure<br />
              DevOps and Amazon Web Services<br />
              Modern Software Development
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsSyllabus;
