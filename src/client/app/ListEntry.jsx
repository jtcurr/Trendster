import React from 'react';
//takes the props from list component and adds a unordered list to hold the rest of the data of the venue
var ListEntry = (props, key) => {
	return (
		<li>
      {props.venueName.name}
      <ul>
        <li>
          {props.venueName.location.address}
          {console.log(props)}
        </li>
      </ul>
    </li>
	)
}

export default ListEntry;