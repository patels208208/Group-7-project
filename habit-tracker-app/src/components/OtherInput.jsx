import { useState, useEffect } from "react";

const OtherInput = ({ selectedMeasurement, handleSelectMeasurement}) => {
  const [other, setOther] = useState("");

  useEffect (() => {
    handleSelectMeasurement(other);
  }, [other, handleSelectMeasurement]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={other}
        onChange={(e) => setOther(e.target.value)}
        placeholder="Other"
        className="w-50 rounded-md bg-white px-3 py-2 text-sm font-semibold text-silverMedal-800 shadow-sm ring-1 ring-inset ring-silverMedal-500 hover:bg-silverMedal-100"
      />
    </div>
  );
}

export default OtherInput;