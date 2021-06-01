import React from 'react';

var Form = (props) => (
<>
<h2>Add Cow:</h2>
  <form onSubmit={props.myclickhandler(event)}>
  <p><label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name"></input></p>
  <p><label htmlFor="description">Description:</label>
  <input type="text" id="description" name="description"></input>
  <input type="submit"></input></p>

  </form>
</>
)

export default Form;
