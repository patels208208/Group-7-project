import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import OtherInput from "./OtherInput";

export default function MeasurementDropdown({selectedMeasurement, handleSelectMeasurement}) {
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSelect = (measurement) => {
    handleSelectMeasurement(measurement);
    setShowOtherInput(measurement === "other");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-silverMedal-800 shadow-sm ring-1 ring-inset ring-silverMedal-500 hover:bg-silverMedal-100">
            {selectedMeasurement ? selectedMeasurement : "Measurement"}
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-silverMedal-600"
            />
          </Menu.Button>
        </div>

        <Menu.Items
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none max-h-60 overflow-y-auto"
        >
          <div className="py-1">
            {[
              "millilitres",
              "litres",
              "glasses",
              "portions",
              "minutes",
              "hours",
              "miles",
              "kilometres",
              "pages",
              "calories",
              "grammes",
              "other",
            ].map((measurement) => (
              <Menu.Item key={measurement}>
                <a
                  href="#"
                  onClick={() => handleSelect(measurement)}
                  className="block px-4 py-2 text-sm text-silverMedal-700 hover:bg-silverMedal-100 hover:text-silverMedal-900"
                >
                  {measurement}
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
      {showOtherInput && (
        <OtherInput
          selectedMeasurement={selectedMeasurement}
          handleSelectMeasurement={handleSelectMeasurement}
        />
      )}
    </div>
  );
};
