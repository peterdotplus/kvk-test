import React from 'react';


class SearchResults extends React.Component {

  render() {
    if(typeof this.props.search_results.data !== "undefined" && typeof this.props.search_results.data[0] !== "undefined") {
      let display_data = this.props.search_results.data;
      let return_results = [];
      for(let i in display_data) {
        return_results.push(<div key={i}>{display_data[i].name}</div>);
      }

      return (
        <div>{return_results}</div>
      );
    } else {
      return null;
    }
  }

}

export default SearchResults;
