import { useEffect, useState } from 'react';

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

  useEffect(() => {
    getPlacePredictions(value, setPredictions);
  }, [value]);

  return predictions;
}
