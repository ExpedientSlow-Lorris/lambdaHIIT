'use strict';

import React from 'react';
import ExerciseForm from './exerciseForm';

let ExerciseFormList = React.createClass({
  render () {
    console.log('data:', this.props.data);
    let exercises = this.props.data.map((exercise) => {
      return (
        <ExerciseForm data={exercise}/>
      );
    });

    return (
      <div className="exerciseFormList">
        {exercises}
      </div>
    );
  }
});

export default ExerciseFormList;