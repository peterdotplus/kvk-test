import React from 'react';


class SearchResults extends React.Component {

  render() {
    if(typeof this.props.search_results.data !== "undefined" && typeof this.props.search_results.data[0] !== "undefined") {
      let display_data = this.props.search_results.data;
      let return_results = [];
      for(let i in display_data) {
        return_results.push(<div key={i}><h3>{display_data[i].name}</h3><p>Plaats: {display_data[i].city}</p><p>Straat: {display_data[i].streetName}</p><p>Postcode: {display_data[i].zipCode}</p></div>);
      }

      return (
        <div id="search-results">{return_results}</div>
      );
    } else {
      return null;
    }
  }

}

export default SearchResults;
