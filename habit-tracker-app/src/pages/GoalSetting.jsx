import React, { useState } from 'react';
import FrequencyDropdown from '../components/FrequencyDropdown';
import Grid from '../components/Grid';
import GoalInput from '../components/GoalInput';
import GoalSetButton from '../components/GoalSetButton';
import NewGoalButton from '../components/NewGoalButton';
import MeasurementDropdown from '../components/MeasurementDropdown';
import MeasurementInput from '../components/MeasurementInput';

const GoalSetting = () => {
  const [selectedMeasurement, setSelectedMeasurement] = useState('');
  const [selectedHabitSquare, setSelectedHabitSquare] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  return (
    <div className='flex justify-center width-auto'>
      <div>
        <div>
          <div class="flex flex-col items-center">
            <h1 className="text-silverMedal-900">Goal Setting</h1>
            <h3 className="text-silverMedal-900">Select the habit you wish to track:</h3>
          </div>
          <Grid selectedHabitSquare={selectedHabitSquare} setSelectedHabitSquare={setSelectedHabitSquare}/>
          <div class="flex flex-col items-center">
            <div className="flex">
            <MeasurementInput />
            <MeasurementDropdown selectedMeasurement={selectedMeasurement} setSelectedMeasurement={setSelectedMeasurement}/>
            </div>
            <div className="flex">
            <GoalInput selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal}/>
            <FrequencyDropdown selectedFrequency={selectedFrequency} setSelectedFrequency={setSelectedFrequency}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2 mt-2'>
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
      </div>
  </div>
  );
}

export default GoalSetting;