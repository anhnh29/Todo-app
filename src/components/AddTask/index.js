import React from 'react';
import './index.css';

const AddTask = () => {

  const submitForm=(event)=> {
    event.preventDefault();
  }
	return (
		<div className="form">
      <form onSubmit={submitForm}>
        <input className="input" type="text"/>
        <button className="button">Add</button>
      </form>
		</div>
	)
}

export default AddTask
