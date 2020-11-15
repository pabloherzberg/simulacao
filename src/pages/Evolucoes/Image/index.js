import React from 'react';
import {useLocation} from 'react-router-dom'

function Image() {
    const location = useLocation()
    const {url} = location.state
  return <img height="100%" width="100%" src={url} />;
}

export default Image;