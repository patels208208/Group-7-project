import React, { useState } from 'react';
import FrequencyDropdown from '../components/FrequencyDropdown';
import Grid from '../components/Grid';
import GoalInput from '../components/GoalInput';
import GoalSetButton from '../components/GoalSetButton';
import NewGoalButton from '../components/NewGoalButton';

const GoalSetting = () => {
  const [selectedHabitSquare, setSelectedHabitSquare] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  return (
  <div>
    <div>
      <h1 className="text-silverMedal-900">Goal Setting</h1>
      <h3 className="text-silverMedal-900">Select the habit you wish to track:</h3>
      <Grid selectedHabitSquare={selectedHabitSquare} setSelectedHabitSquare={setSelectedHabitSquare}/>
      <FrequencyDropdown selectedFrequency={selectedFrequency} setSelectedFrequency={setSelectedFrequency}/>
      <GoalInput selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal}/>
    </div>
    <GoalSetButton 
    setSelectedHabitSquare={setSelectedHabitSquare}
    setSlectedFrequency={setSelectedFrequency}
    setSelectedGoal={setSelectedGoal}
    />
    <NewGoalButton 
    setSelectedHabitSquare={setSelectedHabitSquare}
    setSelectedFrequency={setSelectedFrequency}
    setSelectedGoal={setSelectedGoal}/>
  </div>
  );
}

export default GoalSetting;