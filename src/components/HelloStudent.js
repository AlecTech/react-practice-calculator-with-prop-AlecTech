import React from 'react';

// We can try a fat arrow function as well (let's try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop."
// Props allow us to pass values INTO our components from a parent document / component.
const HelloStudent = props => {
  return (
    // <p>
    //   Hello&nbsp;
    //   { props.name },
    //   welcome to TECHCareers and its React unit!
    //   Their favourite unit is:&nbsp;
    //   { props.unit }
    // </p>
        <select class='where'>
        <option></option>
        <option value='add'>&nbsp; +  </option>
        <option value='subtract'>&nbsp;  -  </option>
        <option value='divid'>&nbsp;  /  </option>
        <option value='multiply'>&nbsp; *  </option>
      </select>
  );
}

export default HelloStudent 
