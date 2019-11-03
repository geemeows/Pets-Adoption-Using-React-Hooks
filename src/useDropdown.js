import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const [state, setState] = useState(defaultState);

  const Dropdown = () => {
    return (
      <label htmlFor={label}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={!options.length}
        >
          <option value="all">All</option>
          {options.map(it => (
            <option key={it} value={it}>
              {it}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
