import React from 'react';

import {handleChange} from './functions.js';

import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {search_form_value:""};
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => {e.preventDefault();this.refresh()}}>
          <div className="form-field col-2"><input type="text" value={this.state.search_form_value} onChange={(e) => handleChange(this, "search_form_value", e)} placeholder="zoek hier.." /></div>
          <div className="form-actions col-2"><input type="submit" value="zoeken" /></div>
        </form>
      </div>
    );
  }

}

export default MainApp;
