import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

function AWSDeveloperAssociateSyllabus() {
  return (
    <>
    <NavBar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="bg-blue-300 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">AWS Developer Associate Syllabus</h1>
        <p className="text-lg mb-6 text-justify">
          This syllabus outlines the key topics covered in the AWS Developer Associate certification exam preparation course.
        </p>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">1. AWS Fundamentals</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>Overview of AWS services and solutions</li>
          <li>AWS Global Infrastructure</li>
          <li>AWS Shared Responsibility Model</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">2. AWS Developer Tools</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>AWS Command Line Interface (CLI)</li>
          <li>AWS SDKs and APIs</li>
          <li>AWS CloudFormation</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">3. Application Development</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>AWS Lambda</li>
          <li>Amazon API Gateway</li>
          <li>AWS Elastic Beanstalk</li>
          <li>AWS CodeDeploy</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">4. Security</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>Identity and Access Management (IAM)</li>
          <li>Encryption mechanisms in AWS</li>
          <li>Security best practices</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">5. Testing and Debugging</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>AWS CodeCommit</li>
          <li>AWS CodeBuild</li>
          <li>AWS CodePipeline</li>
          <li>AWS X-Ray</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">6. Deployment and Monitoring</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
          <li>Amazon CloudWatch</li>
          <li>Amazon CloudTrail</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">7. Scalability and Resilience</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>Auto Scaling</li>
          <li>Elastic Load Balancing</li>
          <li>High Availability architecture</li>
        </ul>
        <h2 className="text-blue-900 text-2xl font-bold mb-2 text-justify">8. Cost Optimization</h2>
        <ul className="list-disc pl-6 mb-6 text-justify">
          <li>AWS pricing models</li>
          <li>Cost allocation tags</li>
          <li>Optimizing AWS resource usage</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default AWSDeveloperAssociateSyllabus;
