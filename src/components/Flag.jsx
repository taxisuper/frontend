import React from 'react';

export default function Flag({ countryCode }) {
  return (
    <span className={`tweet-flag flag-icon flag-icon-${countryCode.toLowerCase()}`}></span>
  );
}
