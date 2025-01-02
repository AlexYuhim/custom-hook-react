import { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'clickToggle':
      return {
        ...state,
        count: state.count + action.count,
      };
    case 'resetCount':
      return {
        ...state,
        count: 0,
      };
  }
};

export function useToggle(defaultValue = true) {
  const [value, setValue] = useState(
    typeof defaultValue === 'object' ? defaultValue[0] : defaultValue
  );

  const initState = {
    count: 1,
  };
  const [state, disp] = useReducer(reducer, initState);

  const hendleToggle = (e) => {
    if (e) return setValue(e);
    if (typeof defaultValue === 'boolean') setValue((prev) => !prev);

    if (typeof defaultValue === 'object') {
      console.log('state', state);

      disp({
        type: 'clickToggle',
        count: 1,
      });
      if (state.count === defaultValue.length - 1) {
        disp({
          type: 'resetCount',
        });
      }
      setValue(defaultValue[state.count]);
    }
  };

  return [value, hendleToggle];
}
