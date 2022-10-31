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
      <div className="App">
        <form onSubmit={(e) => {e.preventDefault();this.refresh()}}>
          <div><input type="text" value={this.state.search_form_value} onChange={(e) => handleChange(this, "search_form_value", e)} placeholder="zoek hier.." /></div>
          <div className="form-actions"><input type="submit" value="zoeken" style={{margin:"0 0 0 7px", padding:"1px 12px"}} /></div>
        </form>
      </div>
    );
  }

}

export default MainApp;
