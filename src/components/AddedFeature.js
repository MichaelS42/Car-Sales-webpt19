import React from 'react';

import {removeFeature} from '../actions';
import { connect, useDispatch } from 'react-redux';
const AddedFeature = props => {

  const dispatch = useDispatch();

const handleDelete = (e) => {
  e.preventDefault();
  dispatch(removeFeature(props.feature));
};

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name} */}
      <button onClick={handleDelete} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// export default connect(null, {removeFeature}) (AddedFeature);
export default AddedFeature;
