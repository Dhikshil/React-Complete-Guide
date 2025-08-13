import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import ErrorPage from './Error.jsx'
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvaialablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
    
      try {
        const places = await fetchAvailablePlaces();

        setAvaialablePlaces(places);

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces =  sortPlacesByDistance (places, position.coords.latitude, position.coords.longitude);
          setAvaialablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message: error.message ||  'Could not fetch places.'
        });
        setIsFetching(false);
      };
    };

    fetchPlaces();
  }, []);
  
  if (error) {
    return <ErrorPage title='Error occurred!' message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
