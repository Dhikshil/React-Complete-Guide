import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import ErrorPage from './Error.jsx'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvaialablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
    
      try {
        const response = await fetch('http://localhost:3000/placess');
        const resData = await response.json();

        if (!response.ok) {
          const error = new Error('Failed to fetch places')
          throw error
        }
        
        setAvaialablePlaces(resData.places);
      } catch (error) {
        setError({
          message: error.message ||  'Could not fetch places.'
        })
      }

      setIsFetching(false);
    }

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
