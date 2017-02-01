import React from 'react';
var ListEntry = (props, key) => {
	return (
		<li>
      {props.venueName.name}
      <ul>
        <li>
          {props.venueName.location.city}
          {console.log(props)}
        </li>
      </ul>
    </li>
	)
}

export default ListEntry;