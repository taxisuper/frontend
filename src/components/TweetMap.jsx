import React from 'react';
import { GoogleMap, Marker, GoogleMapLoader } from 'react-google-maps';

export default function TweetMap({ tweets, showTweet, currentTweet }) {
  const markers = tweets.map(t => {
    const callback = () => {
      showTweet(t.id);
    };
    const icon = t === currentTweet ?
      'http://maps.google.com/mapfiles/ms/icons/green-dot.png' :
      'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

    return (
      <Marker
        key={ t.id }
        onClick={ callback }
        icon={ icon }
        position={{ lat: t.geo.coordinates[0], lng: t.geo.coordinates[1] }}
      />
    );
  });

  return (
    <div className="tweet-map">
      <GoogleMapLoader
        googleMapElement={
          <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 30.675226, lng: -35.051272 }}
          >
            { markers }
          </GoogleMap>
        }
      />
    </div>
  );
}
