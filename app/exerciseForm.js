'use strict';

import React from 'react';
import WorkoutModel from './WorkoutModel';

let ExerciseForm = React.createClass({
  render () {
    return (
      <div>
        <input type="text" placeholder="Exercise Name"/>
        <input type="number" placeholder="Duration (sec)" />
      </div>
    );
  }
});

export default ExerciseForm;