import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path !== '');
  console.log('path link', paths);


  return (
    <div className='breadcrumb-div'>
    <p className='bread-title'>{paths}</p>

    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
      {paths.map((path, index) => (
        <Breadcrumb.Item 
          key={index} 
          linkAs={Link} 
          linkProps={{ to: `/${paths.slice(0, index + 1).join('/')}` }}
        >
          {path}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
    </div>
  );
}

export default Breadcrumbs;
