import React from 'react';
import { geolocated } from 'react-geolocated';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './styles.scss';

const CustomGoogleMap = props => {
  const mapStyles = {
    width: '768px',
    height: '360px',
  };

  const defaultProps = {
    center: {
      lat: 47.83918,
      lng: 35.122242,
    },
    zoom: 14,
  };

  return (
    <div className="google-map">
      <Map google={props.google} zoom={14} style={mapStyles} initialCenter={defaultProps.center} />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 1000,
})(
  GoogleApiWrapper({
    apiKey: 'AIzaSyCbs-XMwgWbTNJsBHF2bPt9FxUqMSN8it8',
  })(CustomGoogleMap),
);
