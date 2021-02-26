import { useState } from 'react';
import useToggler from '../useToggler/useToggler';

export default function useForm(config) {
  const keys = Object.keys(config);

  const initialState = keys.reduce((acc, key) => ({
    ...acc,
    [key]: '',
  }), {});

  const [state, setState] = useState(initialState);

  const [touched, toggleTouched] = useToggler();

  const values = keys.reduce((acc, key) => ({
    ...acc,
    [key]: state[key],
  }), {});

  const validate = () => {
    const errorMessage = keys.find((key) => {
      const value = values[key];

      return config[key].getErrorMessage?.(value, values);
    });

    return !errorMessage;
  };

  const handleChange = (key) => (event) => {
    event.preventDefault();

    setState((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };

  const form = {
    validate,
    handleChange,
    values,
    touched,
    toggleTouched,
  };

  return form;
}
