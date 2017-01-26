import React from 'react';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco CA',
      keyword: 'resteraunts'
    };
  }

  // onLike () {
  //   let newLikesCount = this.state.likesCount + 1;
  //   this.setState({likesCount: newLikesCount});
  // }
  onSearch(e) {
    e.preventDefault();
    console.log('yues');
    console.log(this.refs.value.value);
    // make some sort of ajax request to specified server routes, passing in keyword as data
    //object{location: xxx, keyword: yyy}
    console.log(e.target.value);
  }


  render() {
    return (
      <div>
        <form onSubmit={ (e) => {this.onSearch(e)} }>
          <input type='text' placeholder='What are you looking for?' ref='value' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

}

export default SearchComponent;//{}
