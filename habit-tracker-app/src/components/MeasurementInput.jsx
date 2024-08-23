import { quantityChanged } from "../redux/reducers";
import { useDispatch } from "react-redux";

const MeasurementInput = () => {
  const dispatch = useDispatch(); // Access dispatch
  
  const handleChange = (event) => {
    dispatch(quantityChanged(Number(event.target.value)))
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-silverMedal-900"></h3>
      <input onChange={handleChange} name="measurement-input" placeholder="Quantity" className="w-50 rounded-md bg-white px-3 py-2 text-sm font-semibold text-silverMedal-800 shadow-sm ring-1 ring-inset ring-silverMedal-500 hover:bg-silverMedal-100" type="number" />
    </div>
  )
}

export default MeasurementInput;