import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.764042, lng: 4.835659 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function MyStore() {
  return (
    <div style={{ width: '80vw', height: '80vh', marginLeft: '10%' }}>
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=
        AIzaSyAu5Zpd3RiBlWnPYkU-pVYPKoglAAWjHaU&v=3.exp&libraries=
        geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
