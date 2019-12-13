import React, { Component } from 'react';
import { ExtTextareafield } from "@sencha/ext-react-modern";
import { ExtFormpanel } from "@sencha/ext-react-modern";

class App extends Component {

  render() {
    return (
      <ExtFormpanel
        fullscreen={true}
        layout="form"
      >
        <ExtTextareafield
          labelAlign="top"
          label="Description"
          maxRows={10}
          placeholder="10 rows visible"
        />
      </ExtFormpanel>
    )
  }

}
export default App;
