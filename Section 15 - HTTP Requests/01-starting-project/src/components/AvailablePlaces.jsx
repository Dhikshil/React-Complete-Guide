import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvaialablePlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => {
        return response.json()
      })
      .then((resData) => {
        setAvaialablePlaces(resData.places);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
