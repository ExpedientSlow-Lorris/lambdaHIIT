'use strict';

import React from 'react';

let ExerciseForm = React.createClass({
  render () {
    var data = this.props.data;
    
    return (
      <div>
        <input type="text" placeholder="Exercise Name" value={data.name} required/>
        <input type="number" placeholder="Duration (sec)" value={data.duration} required/>
      </div>
    );
  }
});

export default ExerciseForm;