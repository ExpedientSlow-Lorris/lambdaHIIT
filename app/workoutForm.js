'use strict';

import React from 'react';
import ExerciseFormList from './exerciseFormList';
import { getWorkoutInfo, saveWorkoutInfo } from './workoutModel';

let WorkoutForm = React.createClass({
  getInitialState () {
    return {data: {
      name: 'workout name',
      exerciseRest: 15,
      setRest: 30,
      numSets: 2,
      exercises: [
        {
          name: 'exercise name',
          duration: 30
        }
      ]
    }};
  },
  componentDidMount () {
    // this.loadWorkoutInfo();
  },
  loadWorkoutInfo () {
    getWorkoutInfo()
      .then((data) => {
        this.setState({data: data});
      })
      .catch((err) => {
        console.error(err);
      });
  },
  handleSubmit () {

  },
  render () {
    let data = this.state.data;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Workout Name" value={data.name}/>
        <br/>
        <input type="number" placeholder="Rest b/w Exercises" value={data.exerciseRest} required/>
        <input type="number" placeholder="Rest b/w Sets" value={data.setRest} required/>
        <input type="number" placeholder="# of Sets" value={data.numSets} required/>
        <ExerciseFormList data={data.exercises}/>
        <button type="submit">Save</button>
      </form>
    );
  }
});

export default WorkoutForm;