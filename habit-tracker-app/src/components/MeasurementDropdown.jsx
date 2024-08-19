import { Menu, MenuButton } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function MeasurementDropdown() {
  const [selectedMeasurement, setSelectedMeasurement] = useState(null);

  const handleSelect = (measurement) => {
    setSelectedMeasurement(measurement);
  };

  return (
    <div className="flex flex- md:flex-row items-center justify-center space-y-4 md:space--4">
    {/* <h3 className="text-silverMedal-900">Choose how to measure your goal:</h3> */}
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-silverMedal-800 shadow-sm ring-1 ring-inset ring-silverMedal-500 hover:bg-briny-100">
          {selectedMeasurement ? selectedMeasurement : 'Measurement'}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-silverMedal-600" />
        </Menu.Button>
      </div>

      <Menu.Items
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {['millilitres', 'litres', 'minutes', 'hours', 'miles', 'kilometres', 'pages', 'calories', 'grammes', 'other'].map((measurement) => (
            <Menu.Item key={measurement}>
              <a
                href="#"
                onClick={() => handleSelect(measurement)}
                className="block px-4 py-2 text-sm text-silverMedal-700 data-[focus]:bg-briny-100 data-[focus]:text-silverMedal-900"
              >
                {measurement}
              </a>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
    </div>
  )};