import React from 'react';
import { useParams } from 'react-router-dom';
import { PropertyDetails } from '../../components/rentals/PropertyDetails.tsx';

export default function PropertyDetail() {
  const { propertyId } = useParams<{ propertyId: string }>();

  return (
    <main className="flex-1 bg-neutral-950">
      <PropertyDetails id={propertyId} />
    </main>
  );
}
