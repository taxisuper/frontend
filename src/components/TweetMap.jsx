import React, { PropTypes } from 'react';
import { GoogleMap, Marker, GoogleMapLoader } from 'react-google-maps';


function TweetMap({tweets, onTweetClick}) {
  const markers = tweets.map(t => {
    const color = t.color || 'red';
    const icon = `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`;

    return (
      <Marker
        key={ t.id }
        onClick={ () => onTweetClick(t) }
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

TweetMap.propTypes = {
  tweets: PropTypes.array.isRequired,
  onTweetClick: PropTypes.func.isRequired,
  currentTweet: PropTypes.object,
  filters: PropTypes.array
};

export default TweetMap;
