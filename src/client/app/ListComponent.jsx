import ListEntry from './ListEntry.jsx';
import React from 'react';

//MAPS OVER THE ARRAY OF VENUES AND SENDS THEM TO LIST ENTRY COMPONENT
var ListComponent = (props) => (
      <ul>
        {props.list.map( (venue, key) => <ListEntry venueName={venue} key={key}/>)}
      </ul>
		);

export default ListComponent;
