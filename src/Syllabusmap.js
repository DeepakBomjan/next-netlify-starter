import React from 'react';
import { useParams } from 'react-router-dom';
import DevOpsSyllabus from './syllabus/DevOpsSyllabus';
import AWSDeveloperAssociateSyllabus from './syllabus/AWSDeveloperAssociateSyllabus';
import DataAnalytics from './syllabus/DataAnalytics';
import AWSSolutionsArchitect from './syllabus/AWSSolutionArchitect';
import MERNStackSyllabus from './syllabus/MERNStackSyllabus';
import PythonDjangoSyllabus from './syllabus/PythonDjangoSyllabus'

function Syllabusmap() {
  const { subject } = useParams();

  switch (subject) {
    case 'DevOpsSyllabus':
      return <DevOpsSyllabus/>;
    case 'AWSDeveloperAssociateSyllabus':
      return <AWSDeveloperAssociateSyllabus />;
    case 'DataAnalytics':
      return <DataAnalytics />;
    case 'AWSSolutionArchitect':
      return <AWSSolutionsArchitect/>;
    case 'MERNStackSyllabus':
      return <MERNStackSyllabus/>;
      case 'PythonDjangoSyllabus':
      return <PythonDjangoSyllabus/>;
    default:
      return <div>Invalid syllabus subject</div>;
  }
}

export default Syllabusmap;

