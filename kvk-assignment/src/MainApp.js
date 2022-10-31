import React from 'react';

import {handleChange, apiGET} from './functions.js';

import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {search_form_value:"", search_results:{}};
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => {e.preventDefault();this.getData()}}>
          <div className="form-field col-2"><input type="text" value={this.state.search_form_value} onChange={(e) => handleChange(this, "search_form_value", e)} placeholder="zoek hier.." /></div>
          <div className="form-actions col-2"><input type="submit" value="zoeken" /></div>
        </form>
      </div>
    );
  }

  getData() {
    apiGET("https://617c09aad842cf001711c200.mockapi.io/v1/companies", "getData").then(function(_response) {
      console.log(_response)
      handleChange(this, "search_results", _response);
    }.bind(this)).catch((err) => {
      console.error("getData error"+err);
    });
  }

}

export default MainApp;
