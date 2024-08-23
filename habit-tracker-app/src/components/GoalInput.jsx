import { goalChanged } from "../redux/reducers";
import { useDispatch } from "react-redux";

const GoalInput = () => {
  const dispatch = useDispatch(); // Access dispatch

  const handleChange = (event) => {
    dispatch(goalChanged(Number(event.target.value)))
  };

  return (
    <div className="flex flex-col items-center">
      <input onChange={handleChange} name="goal-input" placeholder="Times per..." className="w-50 rounded-md bg-white px-3 py-2 text-sm font-semibold text-silverMedal-800 shadow-sm ring-1 ring-inset ring-silverMedal-500 hover:bg-silverMedal-100" type="number" />
    </div>
  )
}

export default GoalInput;