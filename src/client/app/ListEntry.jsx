import React from 'react';
//takes the props from list component and adds a unordered list to hold the rest of the data of the venue
var ListEntry = (props, key, {}) => {
  var prefix = props.venueName.venue.photos.groups[0].items[0].prefix;
  var suffix = props.venueName.venue.photos.groups[0].items[0].suffix;
	return (
		<li className='list-item'>
      <a href={props.venueName.venue.url} className='list-link'>{props.venueName.venue.name}</a>
      <ul>
        <li>
          {props.venueName.venue.location.address}
          <br></br>
          <img src={ prefix + '100x100' + suffix } className='list-image'></img> 
        </li>
      </ul>
    </li>
	)
}

export default ListEntry;