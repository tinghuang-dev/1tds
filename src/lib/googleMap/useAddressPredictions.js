import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const getPlacePredictions = (value, cb) => {
  if (!value) {
    cb([]);
    return;
  }

  const autocomplete = new window.google.maps.places.AutocompleteService();

  autocomplete.getPlacePredictions({ input: value, componentRestrictions: { country: 'au' } }, cb);
};

export default function useAddressPredictions(value) {
  const [predictions, setPredictions] = useState([]);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    getPlacePredictions(debouncedValue, setPredictions);
  }, [debouncedValue]);

  return predictions;
}
