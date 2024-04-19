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
            <h1 className="text-blue-500 text-3xl font-bold mb-4">DevOps Syllabus</h1>

            <h2 className="text-blue-500 font-bold mb-4">COURSE OUTLINE</h2>

            <h2 className="text-blue-500 font-bold mb-4">Introduction [15 Min]</h2>
            <ul className="list-disc ml-8">
              <li>Course Features and Tools</li>
              <li>What is DevOps?</li>
              <li>A brief overview of the history of DevOps</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Culture [15 Min]</h2>
            <ul className="list-disc ml-8">
              <li>The Goals of DevOps</li>
              <li>DevOps vs Traditional Silos</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Concepts and Practises [45 Min]</h2>
            <ul className="list-disc ml-8">
              <li>Build Automation</li>
              <li>Continuous Integration</li>
              <li>Continuous Delivery and Continuous Deployment</li>
              <li>Infrastructure as Code</li>
              <li>Configuration Management</li>
              <li>Container Orchestration</li>
              <li>Monitoring</li>
              <li>Microservices</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Tools [45 Min]</h2>
            <ul className="list-disc ml-8">
              <li>Introduction to DevOps Tools</li>
              <li>Tools for Build Automation and Continuous Integration</li>
              <li>Tools for Configuration Management</li>
              <li>Tools for Virtualization and Containerization</li>
              <li>Tools for Monitoring</li>
              <li>Tools for Orchestration</li>
              <li>Source Code Management</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Git Basics</h2>
            <h3 className="text-blue-500 font-bold mb-4">The Basics of Using Git [1 Hr 30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Understanding the Git Filesystem</li>
              <li>Creating a Local Repository (Empty)</li>
              <li>Basic Configuration of Git</li>
              <li>Adding Files to Project</li>
              <li>The Status of your project</li>
              <li>Commiting to Git</li>
              <li>Ignoring Certain File Types</li>
              <li>HOL: Creating Local Repositories with Git and Adding/Checking in Files</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Tags, Branching, Merging and Reverting [45 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Using Tags</li>
              <li>Using Branches</li>
              <li>Merging Branches</li>
              <li>Rebasing</li>
              <li>Reverting a Commit</li>
              <li>Using the 'diff' Command</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Git's Logs and Auditing [15 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Using Git's Logs</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Cloning Repositories [1 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Cloning Local Repositories</li>
              <li>Cloning Remote Repositories over HTTPS, SSH</li>
              <li>Forking</li>
              <li>HOL: Securing Your Github Account with SSH Keys</li>
              <li>HOL: Cloning a Remote GitHub Repository</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Push, Pull, and Tracking Remote Repositories [30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Tracking Remote Repositories</li>
              <li>Pushing to Remote Repositories</li>
              <li>Pull Requests</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Git Branching Strategy [30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>What is a branching strategy?</li>
              <li>Why you need a branching strategy</li>
              <li>What are some common Git branching strategies?</li>
              <li>GitFlow</li>
              <li>GitHub Flow</li>
              <li>GitLab Flow</li>
              <li>Trunk-based Development</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Build Automation and Continuous Integration</h2>
            <h3 className="text-blue-500 font-bold mb-4">Build Automation [2 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Introducing Build Automation</li>
              <li>Build Automation Tools</li>
              <li>gradle</li>
              <li>npm</li>
              <li>make</li>
              <li>Packer</li>
              <li>HOL: Creating Build Automation with Gradle</li>
              <li>HOL: Automate AMI image creation with Packer</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Continuous Integration & Jenkins Pipelines [3 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>CI Overview</li>
              <li>Installing Jenkins</li>
              <li>Scripted vs. Declarative Pipelines</li>
              <li>Scripted Pipelines</li>
              <li>Declarative Pipelines</li>
              <li>Groovy and DSL</li>
              <li>Jenkinsfile Basics</li>
              <li>Upstream, Downstream, and Triggers</li>
              <li>Artifacts and Fingerprints</li>
              <li>Linking Jobs</li>
              <li>Automating Jobs</li>
              <li>HOL: Linking Jobs in Jenkins</li>
              <li>HOL: Building multibranch build job with dependency between multiple job FreeStyle Jobs</li>
              <li>Basic Job Structure</li>
              <li>Parameters</li>
              <li>Notifications</li>
              <li>HOL: Building a Freestyle Job in Jenkins</li>
              <li>Agents and Distributed Builds</li>
              <li>Setting up a Build Agent</li>
              <li>Distributing a Build</li>
              <li>HOL: Distributing a Jenkins Build Jenkins on the Command Line</li>
              <li>Using the Jenkins API</li>
              <li>Using the Jenkins CLI</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Continuous Delivery and Continuous Deployment [3 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>What is Continuous Delivery and Continuous Deployment</li>
              <li>Continuous Delivery vs. Continuous Deployment</li>
              <li>Bringing CI and CD (and CD) Together</li>
              <li>Continuous Delivery Release Automation</li>
              <li>Automated Deployment</li>
              <li>Configuration Management</li>
              <li>HOL: Implementing Automated Deployment Through a Jenkins Pipeline</li>
              <li>HOL: Provide Continuous Delivery with GitHub and Terraform Cloud for AWS</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Infrastructure Automation</h2>
            <h3 className="text-blue-500 font-bold mb-4">DevOps Tools for Infrastructure Automation [30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Infrastructure Provisioning</li>
              <li>Configuration Management</li>
              <li>Continuous Integration/Deployment</li>
              <li>Config/Secret Management</li>
              <li>Logging and Monitoring</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Understanding Infrastructure as code [30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>IaC and Its Benefits</li>
              <li>Cloud Agnostic IaC with Terraform</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">IaC with Terraform [6 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>What is the Terraform Workflow?</li>
              <li>Terraform Key Concepts: Plan, Apply, and Destroy</li>
              <li>Resource Addressing in Terrafrom: Understanding Terraform Code Terraform Fundamentals</li>
              <li>Terraform State</li>
              <li>Terraform Variables and Outputs</li>
              <li>Terraform Provisioners</li>
              <li>HOL: Deploying a VM in AWS Using the Terraform Workflow</li>
              <li>HOL: Using Terraform Provisioner to Setup an Nginx Proxy on AWS Terraform Modules</li>
              <li>Accessing and Using Terraform Modules</li>
              <li>Interacting with Terraform Module Inputs and Outputs</li>
              <li>HOL: Building and Testing a Basic Terraform Module</li>
              <li>Built-in Funtions and Dynamics Blocks</li>
              <li>Terraform Built-in Functions</li>
              <li>Terraform Dynamic Blocks</li>
              <li>HOL: Using Terraform Dynamic Blocks and Built-in Functions to Deploy to AWS</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Configuration Management with Ansible [6 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>What is Configuration Management?</li>
              <li>What is Ansible?</li>
              <li>Installation and Configuration</li>
              <li>HOL: Deploying Ansible</li>
              <li>HOL: Getting Started with Ansible</li>
              <li>HOL: Ad-Hoc Ansible Commands</li>
              <li>HOL: Working with Ansible Inventories</li>
              <li>Ansible Tasks</li>
              <li>Plays and Playbooks</li>
              <li>HOL: Ansible Playbooks: The Basics</li>
              <li>HOL: Working with Ansible Templates, Variables, and Facts</li>
              <li>HOL: Deploying Services Using Ansible</li>
              <li>HOL: Advanced Features in Ansible Playbooks</li>
              <li>Roles</li>
              <li>HOL: Working with Ansible Roles</li>
              <li>Ansible Vault</li>
              <li>HOL: Working with Confedential Data in Ansible</li>
              <li>Building Playbooks for Jenkins Master Setup</li>
              <li>Building Playbooks for Jenkins Worker Setup</li>
              <li>Building Jinja2 Templates for Ansible Playbooks</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Containers and Orchestration</h2>

            <h3 className="text-blue-500 font-bold mb-4">Docker Community Edition Installation and Configuration [2 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Intalling Docker Community Edition</li>
              <li>Docker Basics</li>
              <li>Docker Commands</li>
              <li>Creating Containers</li>
              <li>Exposing Container Ports</li>
              <li>Executing Container Commands</li>
              <li>Docker Logging</li>
              <li>Networking</li>
              <li>Storage and Volumes</li>
              <li>Selecting a Storage Driver</li>
              <li>Running a Container</li>
              <li>Namespaces and Cgroups</li>
              <li>HOL: Installing and Configuring the Docker Engine</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Image Creation, Management, and Registry [3 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Docker Images</li>
              <li>The Components of a Dockerfile</li>
              <li>More Dockerfile Directives</li>
              <li>Building Efficient Images</li>
              <li>Managing Images</li>
              <li>Flattening a Docker Image to a Single Layer</li>
              <li>Introduction to Docker Registries</li>
              <li>Using Docker Registries</li>
              <li>HOL: Creating Your Own Docker Image</li>
              <li>HOL: Building a Private Docker Registry</li>
              <li>HOL: Building Crosplatform Images Using Multi-Stage Build</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Docker Compose [2 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Docker Service</li>
              <li>Compose Commands</li>
              <li>Creating a Compose File</li>
              <li>Using Volumes and Networking with Compose</li>
              <li>HOL: Building a Microservices with Docker Compose</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Kubernetes - Container Orchestrator [10 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>Kubernetes Fundamentals Intro</li>
              <li>Exploring Kubernetes Architecture</li>
              <li>Kubernetes Objects</li>
              <li>Kubernetes Networking</li>
              <li>Kubernetes Networking Basics</li>
              <li>Kubernetes Service Fundamentals</li>
              <li>Service Types</li>
              <li>Kubernetes Storage</li>
              <li>Kubernetes Storage Big Picture</li>
              <li>Persistent Volumes and Persistent Volume Claims</li>
              <li>Storage Clases</li>
              <li>Kubernetes Deployments</li>
              <li>Scaling Applications Automatically</li>
              <li>Horizontal Pod Autoscaler</li>
              <li>Cluster Autoscaler</li>
              <li>RBAC and Admission Control</li>
              <li>HOL: Working with Kubernetes Namespace</li>
              <li>HOL: Managing Kubernetes Applications With Deployments</li>
              <li>HOL: Exposing Kubernetes Pods Using Services</li>
              <li>HOL: Using Kubernetes Services with DNS</li>
              <li>HOL: Using Kubernetes Ingress</li>
              <li>HOL: Managing Container Storage With Kubernetes Volumes</li>
              <li>HOL: Using PersistentVolumes in Kubernetes</li>
            </ul>

            {/* Include content for remaining chapters with similar structure */}

          </div>
        </div>
      </div>
    </>
     );
};

export default DevOpsSyllabus;
