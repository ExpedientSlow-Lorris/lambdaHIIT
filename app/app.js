'use strict';

import React from 'react';
import WorkoutForm from './workoutForm';

let App = React.createClass({
  render () {
    return (
      <div>
        <WorkoutForm/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
