import React from 'react';
import productJS from './product';
function Image(props) {
  return (
    <img src={productJS.Image} alt={props.name} />
  );
}

export default Image;
