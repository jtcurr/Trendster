import React from 'react';

var GoogleMapAPIComponent = (options, callback) => {

  $.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyAhciEsWzSnzUfMBUMBkdkb6sjjl6Chp1k')
  .done(({map}) => {
    if (callback) {
      callback(map);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
    console.error(err)
    );
  });

}

export GoogleMapAPIComponent
