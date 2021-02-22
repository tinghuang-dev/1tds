import { useState } from 'react';

export default function useForm(config) {
  const formKeys = Object.keys(config);

  const initialForm = formKeys.reduce((formObject, key) => ({
    ...formObject,
    [key]: '',
  }), {});

  const [formState, updateForm] = useState(initialForm);

  const [touched, setTouched] = useState(false);

  const formValues = formKeys.reduce((formValuesObject, key) => ({
    ...formValuesObject,
    [key]: formState[key],
  }), {});

  const validateInput = () => {
    const inValidInputKey = formKeys.find((key) => (
      config[key].isInValid?.(formValues[key], formValues)
    ));

    return !inValidInputKey;
  };

  const handleInputChange = (formKey) => (
    (event) => {
      event.preventDefault();

      updateForm((prevState) => ({
        ...prevState,
        [formKey]: event.target.value,
      }));
    }
  );

  const getValues = () => formValues;

  const toggleTouched = () => {
    setTouched((prevState) => !prevState);
  };

  const form = {
    validateInput,
    handleInputChange,
    getValues,
    touched,
    toggleTouched,
  };

  return form;
}
