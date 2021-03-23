import { useState } from 'react';
import useToggler from '../useToggler/useToggler';

export default function useForm(config, onSubmit, onSubmitFail) {
  const keys = Object.keys(config);

  const initialState = keys.reduce((acc, key) => ({
    ...acc,
    [key]: '',
  }), {});

  const [state, setState] = useState(initialState);

  const [touched, toggleTouched] = useToggler();

  const [submitting, setSubmitting] = useState(false);

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
    if (event) {
      event.preventDefault();
    }

    toggleTouched(true);

    if (validate()) {
      setSubmitting(true);

      try {
        await onSubmit(values);
      } catch (error) {
        onSubmitFail(error, values);
      }
      setSubmitting(false);
    }
  };

  const form = {
    handleChange,
    values,
    touched,
    submitting,
    handleSubmit,
  };

  return form;
}
