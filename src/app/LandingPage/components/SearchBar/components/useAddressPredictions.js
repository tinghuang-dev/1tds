import {
  useCallback, useEffect, useRef, useState,
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';
import useScript from '../../../../../hooks/useScript';

export default function useAddressPredictions(input) {
  useScript('//maps.googleapis.com/maps/api/js?key=AIzaSyCa6z9n4ybixfY7JmVb4tVqfXPZwxyqFmE&language=en&libraries=places');
  const [predictions, setPredictions] = useState([]);

  const autocomplete = useRef();

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService();
  }

  function getPlacePredictions() {
    autocomplete.current.getPlacePredictions(
      { input },
      () => {
        setPredictions(
          predictions.map((prediction) => prediction.description),
        );
      },
    );
  }

  const debouncedGetPlacePredictions = useCallback(
    debounce(getPlacePredictions, 500),
    [],
  );

  useEffect(() => {
    debouncedGetPlacePredictions(input);
  }, [debouncedGetPlacePredictions, input]);

  return predictions;
}
