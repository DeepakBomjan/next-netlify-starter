// CardList.js
import React from 'react';
import Card from './Card';
import NavBar from './Navbar/NavBar';

const CourseList = () => {
  const cardsData = [
    {
      imageUrl: process.env.PUBLIC_URL + '/DevOps.jpg',
      imageAlt: 'DevOps',
      title: 'DeVOps',
      description: '',
      //price: 'Rs 25000',
      startDate: '15th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link',
      syllabusUrl: '/syllabus/DevOpsSyllabus'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/datascience.jpg',
      imageAlt: 'datascience',
      title: 'Data Analytics and ML',
      //description: 'Coming Soon',
      //price: 'Rs 25000',
      startDate: '20th Falgun',
      syllabusUrl: '/syllabus/DataAnalytics',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },

    {
      imageUrl: process.env.PUBLIC_URL + '/AWS-Developer-Associate-Courses.png',
      imageAlt: 'AWS-Developer Associate',
      title: 'AWS-Developer-Associate',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      startDate: '20th Falgun',
      syllabusUrl: '/syllabus/AWSDeveloperAssociateSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    
    {
      imageUrl: process.env.PUBLIC_URL + '/AWS_solution_associate.png',
      imageAlt: 'AWS-solution-associate',
      title: 'AWS-solution-associate',
      //description: 'Coming Soon',
     // price: 'Rs 30000',
      startDate: '27th Falgun',
      syllabusUrl: '/syllabus/AWSSolutionArchitect',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/django.png',
      imageAlt: 'django',
      title: 'Python with Django',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      startDate: 'Coming Soon',
      syllabusUrl: '/syllabus/PythonDjangoSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/rhel.jpg',
      imageAlt: 'rhel',
      title: 'RHEL',
      //description: 'Coming Soon',
      //price: 'Rs 25000',
      startDate: '27th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/mern.jpg',
      imageAlt: 'mern',
      title: 'Full Stack MERN',
      //description: 'Coming Soon',
     // price: 'Rs 40000',
      startDate: '27 th Falgun',
      syllabusUrl: '/syllabus/MERNStackSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
   
    {
      imageUrl: process.env.PUBLIC_URL + '/digitalmarketing.jpg',
      imageAlt: 'digitalmarketing',
      title: 'Digital Marketing',
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      startDate: 'Coming Soon',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
      {
      imageUrl: process.env.PUBLIC_URL + '/java.jpg',
      imageAlt: 'java',
      title: 'Java',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      startDate: 'Coming Soon',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    
    {
      imageUrl: process.env.PUBLIC_URL + '/AWS-Developer-Associate-Courses.png',
      imageAlt: 'AWS-Developer Associate',
      title: 'AWS-Developer-Associate',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      startDate: '20th Falgun',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    
    {
      imageUrl: process.env.PUBLIC_URL + '/laravel.png',
      imageAlt: 'laravel',
      title: 'Laravel',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      startDate: 'Coming Soon',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/php.png',
      imageAlt: 'php',
      title: 'PHP MySQL',
      //description: 'Coming Soon',
     // price: 'Rs 30000',
      startDate: 'Coming Soon',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },

    {
      imageUrl: process.env.PUBLIC_URL + '/aws.jpg',
      imageAlt: 'Amazon AWS',
      title: 'AWS',
      //description: 'Coming Soon',
     // price: 'Rs 25000',
      startDate: '20th Falgun',
      syllabusUrl: '/Syllabus/Aws',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    // Add more card data as needed
  ];

  return (
    <>
    <NavBar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </>
  );
};

export default CourseList;
