import React from 'react';
import PropTypes from 'prop-types';

const Skill = (props) => {
  return (
    <div 
      className='card my-1 p-1 flex-row' 
    > {props.skill.name}
      <span className='ml-auto mr-2'>
        <i 
          className='fa fa-times' 
          onClick={()=> props.onHandleRemoveSkill(props.skill.id)}
        /></span>
    </div>        
  );
};

Skill.propTypes = {
  onHandleRemoveSkill: PropTypes.func,
  skill: PropTypes.object
};


export default Skill;
