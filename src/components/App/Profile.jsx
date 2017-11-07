import React from 'react';
import { Link } from 'react-router-dom';
import Bio from './Bio';

const Results = () => {
  return (
    <div className='row text-center'>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Jonny Kalambay </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Bio />
          </div>
        </div>

        <div className='row'>

          <div className='col-md-4'>
            <div className='m-1'>
              <a href='https://www.linkedin.com/in/jonnykalambay/'>  <button className='btn btn-block btn-outline-info'><i className='fa fa-linkedin' /></button></a>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='m-1'>
              <a href='https://github.com/jonnyk20'><button className='btn btn-block btn-outline-info'><i className='fa fa-github' /></button></a>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='m-1'>
              <a href='https://codepen.io/jonnnyk20'><button className='btn btn-block btn-outline-info'><i className='fa fa-codepen' /></button></a>
            </div>
          </div>

        </div>
        <div className='row'>
          <div className='col-md-12 my-2'>
            <Link to='/results'> 
              <button className='btn btn-outline-secondary m-1' >Results</button>
            </Link>
            <Link to='/'> 
              <button className='btn btn-outline-secondary m-1'>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
