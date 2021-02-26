import { useState } from 'react';

export default function useToggler() {
  const [state, setState] = useState(false);

  const toggleState = (targetState) => {
    if (targetState) {
      if (typeof targetState !== 'boolean') {
        throw new Error('CAN SET BOOLEAN TOGGLE VALUE');
      }

      setState(targetState);

      return;
    }

    setState((prevState) => !prevState);
  };

  return [state, toggleState];
}
