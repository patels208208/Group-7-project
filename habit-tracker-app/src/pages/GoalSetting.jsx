import React, { useState } from 'react';
import FrequencyDropdown from '../components/FrequencyDropdown';
import Grid from '../components/Grid';
import GoalInput from '../components/GoalInput';
import GoalSetButton from '../components/GoalSetButton';
import NewGoalButton from '../components/NewGoalButton';
import MeasurementDropdown from '../components/MeasurementDropdown';
import MeasurementInput from '../components/MeasurementInput';

const GoalSetting = () => {
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [selectedMeasurement, setSelectedMeasurement] = useState('');
  const [selectedHabitSquare, setSelectedHabitSquare] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleSelectFrequency = async (frequency) => {
    setSelectedFrequency(frequency);
    const response = await fetch('http://localhost:3001/frequency', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        frequency: frequency,
      }),
    });
    console.log(frequency);
    const data = await response.json();
    return data;
  }

  const handleSelectMeasurement = async (measurement) => {
    setSelectedMeasurement(measurement);
    const response = await fetch('http://localhost:3001/measurement', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        measurement: measurement,
      }),
    });
    console.log(measurement);
    const data = await response.json();
    return data;  
  }

  return (
    <div className='flex justify-center width-auto'>
      <div>
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-silverMedal-900">Goal Setting</h1>
            <h3 className="text-silverMedal-900">Select the habit you wish to track:</h3>
          </div>
          <Grid selectedHabitSquare={selectedHabitSquare} setSelectedHabitSquare={setSelectedHabitSquare}/>
          <div className="flex flex-col items-center">
          <h3>How would you like to track this habit?</h3>
            <div className="flex">
            <MeasurementInput selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity}/>
            <MeasurementDropdown handleSelectMeasurement={handleSelectMeasurement} selectedMeasurement={selectedMeasurement} setSelectedMeasurement={setSelectedMeasurement}/>
            </div>
            <div className="flex">
            <GoalInput selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal}/>
            <FrequencyDropdown handleSelectFrequency={handleSelectFrequency} selectedFrequency={selectedFrequency} setSelectedFrequency={setSelectedFrequency}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2 mt-2'>
          <GoalSetButton 
          selectedHabitSquare={selectedHabitSquare}
          selectedQuantity={selectedQuantity}
          selectedMeasurement={selectedMeasurement}
          selectedFrequency={selectedFrequency}
          selectedGoal={selectedGoal}
          />
          <NewGoalButton 
          selectedHabitSquare={selectedHabitSquare}
          selectedQuantity={selectedQuantity}
          selectedMeasurement={selectedMeasurement}
          selectedFrequency={selectedFrequency}
          selectedGoal={selectedGoal}/>
        </div>
      </div>
  </div>
  );
}

export default GoalSetting;