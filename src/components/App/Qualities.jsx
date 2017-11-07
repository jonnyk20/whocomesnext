import React from 'react';

const Qualities = () => {
  return (
    <div className='card m-3 '>
      <form className='p-3'>
        <h6 className='text-light mb-2'>Which quality is most important in your dev?</h6>
        <select 
          className="form-control text-muted" 
          defaultValue={'choice'}
          id="exampleFormControlSelect1"
        >
          <option 
            disabled
            value={'choice'}
          >Please Choose</option>
          <option>Initiative</option>
          <option>Collaborativeness (It's a word, I checked)</option>
          <option>Passion</option>
          <option>Problem-Solving Skills</option>
          <option>Other generic resume term</option>
        </select>
      </form>
    </div>
  );
};

export default Qualities;
