import React from 'react';
import $ from 'jquery';

class SearchComponent extends React.Component {

  constructor({searchFunc}) {
    super({searchFunc});
    this.state = {
      location: 'San Francisco CA',
      keyword: 'restaurants'
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => {searchFunc(e).bind(this)} }>
          <input type='text' placeholder='What are you looking for?' ref='keyword' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

}

export default SearchComponent;//{}

//is e or the binding going to cause a problem?
