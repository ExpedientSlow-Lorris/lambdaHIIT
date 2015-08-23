'use strict';

import React from 'react';
import ExerciseForm from './exerciseForm';
import WorkoutModel from './WorkoutModel';

let WorkoutForm = React.createClass({
  // getInitialState () {
  //   return {data: []};
  // },
  // componentDidMount () {

  // },
  // loadWorkoutInfo () {
  //   WorkoutModel.getInfo()
  // },
  render () {
    return (
      <form>
        <input type="text" placeholder="Workout Name"/>
        <br/>
        <input type="number" placeholder="Rest b/w Exercises"/>
        <input type="number" placeholder="Rest b/w Sets"/>
        <input type="number" placeholder="# of Sets"/>
        <ExerciseForm/>
      </form>
    );
  }
});

export default WorkoutForm;