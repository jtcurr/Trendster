import ListEntry from './ListEntry.jsx';
import React from 'react';

var ListComponent = (props) => (
      <ul>
        {props.list.map( (venue, key) => <ListEntry venueName={venue} key={key}/>)}
      </ul>
		);

export default ListComponent;