import Router from 'next/router';
import getGeoLocationByPlaceId from './getGeoLocationByPlaceId';

const goToMapPageByAddress = (address) => {
  if (!address) {
    return;
  }

  const placeId = address.place_id;

  getGeoLocationByPlaceId(placeId)
    .then((result) => {
      const latlng = {
        lat: result[0].geometry.location.lat(),
        lng: result[0].geometry.location.lng(),
      };

      Router.push({
        pathname: '/map',
        query: latlng,
      });
    });
};

export default goToMapPageByAddress;
