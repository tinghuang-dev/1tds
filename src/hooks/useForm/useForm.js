import { useState } from 'react';

export default function useForm(config, onsubmit) {
  const keys = Object.keys(config);

  const initialState = keys.reduce((acc, key) => ({
    ...acc,
    [key]: config[key]?.initialValue || '',
  }), {});

  const [state, setState] = useState(initialState);

  const [touched, setTouched] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    setTouched(true);

    const valid = validate();

    if (!valid) {
      return;
    }

    onsubmit(values);
  };

  const form = {
    handleChange,
    values,
    touched,
    handleSubmit,
  };

  return form;
}
