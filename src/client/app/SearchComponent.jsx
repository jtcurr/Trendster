import React from 'react';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco CA',
      keyword: 'restaurants'
    };
  }
   //this takes in the keyword and location from the user and passes it up to the search func in index.jsx
   render() {
     return (
       <div>
         <form onSubmit={ (e) => {this.props.searchFunc(e, this.refs.keyword.value, this.refs.location.value)} }>
           <input type='text' placeholder='Where are you?' ref='location' />
           <br></br>
           <input type='text' placeholder='What are you looking for?' ref='keyword' />
           <button type='submit'>Submit</button>
         </form>
       </div>
     );
   }

}

export default SearchComponent;//{}

//is e or the binding going to cause a problem?
