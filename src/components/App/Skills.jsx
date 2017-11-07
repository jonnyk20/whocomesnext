import React, { Component } from 'react';
import Skill from './Skill';

class Skills extends Component {
  constructor(){
    super();
    this.state = {
      skills: [{ id: 0, name:'AngularJS' }, { id: 1, name:'PHP' }, { id: 3, name:'UI Design' }],
      term: '',
      nextID: 3
    };
    this.handleRemoveSkill = this.handleRemoveSkill.bind(this)
  }
  onHandleChange(e){
    this.setState({
      term: e.target.value
    });
  }
  onAddSkill(event){
    event.preventDefault();
    if (this.state.term === ''){
      return;
    }
    this.setState({
      skills: [...this.state.skills, { id: this.state.nextID, name: this.state.term }],
      nextID: this.state.nextID + 1,
      term: ''
    });
  }

  handleRemoveSkill(skillID){
    const indexToSplice = this.state.skills.findIndex(skill => skill.id === skillID);
    const newSkills = [...this.state.skills];
    newSkills.splice(indexToSplice, 1);
    this.setState({
      skills: newSkills
    });
  }

  render(){
    const skills = this.state.skills.map((skill) => {
      return (
        <Skill
          key={skill.id}
          onHandleRemoveSkill={this.handleRemoveSkill}
          skill={skill}
        />
      );
    });
    return (
      <div className='card m-3 p-3'>
        
        <h6 className='mb-2 mx-0 text-light'> What skills are you looking for?</h6>
        <form onSubmit={(event)=> this.onAddSkill(event)}>
          <div className='input-group my-1'>
            <input 
              className='form-control' 
              onChange={(event)=>this.onHandleChange(event)} 
              placeholder='Add skill...'
              type='text'
              value={this.state.term}
            />
            <span className='input-group-btn'>
              <button 
                className='btn border-white text-info'
                type='submit'
              >
                <i 
                  aria-hidden="true" 
                  className="fa fa-plus" 
                />
              </button>
            </span>
          </div>
        </form>
        {skills}
      </div>
    );
  }
}

export default Skills;
