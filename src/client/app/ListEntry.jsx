import React from 'react';

//CREATES NAME, ADDRESS, AND IMAGE FOR EACH VENUE
var ListEntry = (props, key, {}) => {
  var prefix = props.venueName.venue.photos.groups[0].items[0].prefix;
  var suffix = props.venueName.venue.photos.groups[0].items[0].suffix;
	return (
		<div className='list-item'>
      <a href={props.venueName.venue.url} className='list-link'>{props.venueName.venue.name}</a>
      <div>
        {props.venueName.venue.location.address}
        <br></br>
        <img src={ prefix + '300x300' + suffix } className='list-image'></img>
      </div>
    </div>
	)
}

export default ListEntry;
