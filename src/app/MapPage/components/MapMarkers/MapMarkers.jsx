import React from 'react';
import Icon from '../../../../components/Icon';

const MapMarkers = ({ lat, lng }) => (
  <>
    <Icon
      name="storeMark"
      size="2x"
      lat={-37.808}
      lng={144.965}
      color="red"
    />
    <Icon
      name="mapPin"
      size="2x"
      lat={lat}
      lng={lng}
      color="red"
    />
  </>
);

export default MapMarkers;
