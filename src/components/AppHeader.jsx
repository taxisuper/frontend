import React from 'react';
import Link from '../containers/Link';

import Timer from './Timer';

export default function AppHeader() {
  return (
    <div className="app-header">
          <Link to="/" className="img img-icon img-icon-dashboard">Dashboard</Link>
    </div>);
}
