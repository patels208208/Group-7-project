import React, { useState } from "react";
import FrequencyDropdown from "../components/FrequencyDropdown";
import Grid from "../components/Grid";
import GoalInput from "../components/GoalInput";
import GoalSetButton from "../components/GoalSetButton";
import NewGoalButton from "../components/NewGoalButton";
import MeasurementDropdown from "../components/MeasurementDropdown";
import MeasurementInput from "../components/MeasurementInput";

const GoalSetting = () => {
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [selectedMeasurement, setSelectedMeasurement] = useState("");
  const [selectedHabitSquare, setSelectedHabitSquare] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedHabitName, setSelectedHabitName] = useState("");
  const [showGoalConfirmation, setShowGoalConfirmation] = useState(false);

  const handleNewGoal = () => {
    setShowGoalConfirmation(false);
  };

  // TODO: Reconnec to backend
  const handleSelectFrequency = async (frequency) => {
    setSelectedFrequency(frequency);
    const response = await fetch("http://localhost:3001/frequency", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        frequency: frequency,
      }),
    });
    console.log(frequency);
    const data = await response.json();
    return data;
  };

  // TODO: Reconnec to backend
  const handleSelectMeasurement = async (measurement) => {
    setSelectedMeasurement(measurement);
    const response = await fetch("http://localhost:3001/measurement", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        measurement: measurement,
      }),
    });
    console.log(measurement);
    const data = await response.json();
    return data;
  };

  return (
    <div className="flex justify-center width-auto">
      <div>
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">
              Goal Setting
            </h1>
            <h3 className="text-silverMedal-900 text-lg font-semibold">
              Select the habit you wish to track:
            </h3>
          </div>
          <Grid />
          <div className="flex flex-col items-center">
            <h3 className="text-silverMedal-900 text-lg font-semibold">
              How would you like to track this habit?
            </h3>
            <div className="flex flex-wrap justify-center space-x-4">
              <MeasurementInput />
              <MeasurementDropdown />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-silverMedal-900 text-lg font-semibold mb-4 mt-4">
                How often would you like to achieve this?
              </h3>
              <div className="flex flex-wrap justify-center space-x-4 mt-4">
                <GoalInput />
                <FrequencyDropdown
                  handleSelectFrequency={handleSelectFrequency}
                  selectedFrequency={selectedFrequency}
                  setSelectedFrequency={setSelectedFrequency}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 mt-4">
          {/* // TODO: Update GoalSetButton */}
          <GoalSetButton
            selectedHabitSquare={selectedHabitSquare}
            selectedQuantity={selectedQuantity}
            selectedMeasurement={selectedMeasurement}
            selectedFrequency={selectedFrequency}
            selectedGoal={selectedGoal}
            selectedIcon={selectedIcon}
            onNewGoal={handleNewGoal}
            setSelectedHabitSquare={setSelectedHabitSquare}
            setSelectedQuantity={setSelectedQuantity}
            setSelectedMeasurement={setSelectedMeasurement}
            setSelectedFrequency={setSelectedFrequency}
            setSelectedGoal={setSelectedGoal}
            setSelectedIcon={setSelectedIcon}
          />
          <NewGoalButton
            setSelectedHabitSquare={setSelectedHabitSquare}
            setSelectedQuantity={setSelectedQuantity}
            setSelectedMeasurement={setSelectedMeasurement}
            setSelectedFrequency={setSelectedFrequency}
            setSelectedGoal={setSelectedGoal}
            setSelectedIcon={setSelectedIcon}
            onNewGoal={handleNewGoal}
          />
        </div>
      </div>
    </div>
  );
};

export default GoalSetting;
