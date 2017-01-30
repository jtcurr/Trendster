import React from 'react';
import $ from 'jquery';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco CA',
      keyword: 'resteraunts'
    };
  }

  onSearch(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      success: function (res){
        conosle.log(res);
      },
      error: function (err) {
        console.log('Error posting search function')
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => {this.onSearch(e)} }>
          <input type='text' placeholder='What are you looking for?' ref='keyword' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

}

export default SearchComponent;//{}
