import { useState } from 'react';

const RadioTabs = () => {
  const [selected, setSelected] = useState('HTML');
  const options = ['Home', 'Fixture', 'Teams', 'Schedules'];

  return (
    <div className="relative flex flex-wrap rounded-lg bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)] p-1 w-[300px] text-sm">
      {options.map((option) => (
        <label
          key={option}
          className="flex-[1_1_auto] text-center cursor-pointer"
        >
          <input
            type="radio"
            name="radio"
            className="hidden"
            checked={selected === option}
            onChange={() => setSelected(option)}
          />
          <span
            onClick={() => setSelected(option)}
            className={`flex items-center justify-center rounded-lg py-2 transition-all duration-150 ease-in-out
              ${
                selected === option
                  ? 'bg-[#1e293b] text-white font-semibold'
                  : 'text-black hover:text-slate-700'
              }
            `}
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioTabs;
