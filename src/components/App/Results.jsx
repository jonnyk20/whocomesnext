import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Results extends Component {
  constructor(){
    super();
    this.state = {
      results: false
    };
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        results: true
      });
    }, 7000);
  }
  handleClick(){
    alert('No.');
  }
  render() {
    return (
      <div className='text-center'>
        {
          !this.state.results &&
          <div>
            <h4 className='text-light'> Searching our database of millions  </h4>
            <h5 className='text-light'> (yeah, millions) </h5>
            <i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' />
          </div>
        }
        {
          this.state.results &&
          <div>
            <h4>1 candidate found</h4>
            <div 
              className='card mx-auto p-3'
              style={{ width: '100%' }}
            >
              <img 
                alt='Card cap'
                className='card-img-top mx-auto'
                src='https://s3.ca-central-1.amazonaws.com/jonnyk-misc/images/Jonathan+Kalambay_preview.jpeg' 
                style={{ maxWidth: 200 }}
              />
              <div className='card-body'>
                <h6>Jonny Kalambay</h6>
                <p className='card-text text-muted'>Vancouver Based Web Developer</p>
              </div>
              <Link to='/profile'> 
                <button className='btn btn-outline-info m-1'>View Full Profile</button>
              </Link>
              <div>
                <button 
                  className='btn btn-outline-secondary m-1'
                  onClick={()=>this.handleClick()}
                >Modify Search</button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
};

export default Results;
