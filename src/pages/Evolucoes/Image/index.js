import React, {useState} from 'react';
import {useLocation} from 'react-router-dom'

function Image() {
    const location = useLocation()
    const {url} = location.state
    const [rotate, setRotate] = useState(0)
  return (
      <div>
          <img style={{transform:`rotate(${rotate}deg)`}} height="100%" width="100%" src={url} />
          <button onClick={()=>setRotate(rotate - 90)} style={{position:'absolute', bottom:'10%', left:"50%", transform:'translateX(-50%)'}}>Girar</button>
      </div>
    );
}

export default Image;