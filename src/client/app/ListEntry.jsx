import React from 'react';
//takes the props from list component and adds a unordered list to hold the rest of the data of the venue
var ListEntry = (props, key) => {
	return (
		<li>
      <a href={props.venueName.url}>{props.venueName.name}</a>
      <ul>
        <li>
          {props.venueName.location.address} <br></br>
          <a>Trending Points {props.venueName.stats.checkinsCount}</a>
          
        </li>
      </ul>
    </li>
	)
}

export default ListEntry;