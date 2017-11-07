import React from 'react';
import { Link } from 'react-router-dom';
import Skills  from './Skills';
import Qualities  from './Qualities';

const Home = () => {
  return (
    <div className='row text-center text-white text-light'>
      <div className='col-md-12'>
        <h2 className='text-light'>Who Comes Next</h2>
        <h4 className='text-light text-muted'>Find awesome devs in your area </h4>
        <Skills />
        <Qualities />
        <Link to='/results'> 
          <button className='btn btn-outline-info'>Search for Developer</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
