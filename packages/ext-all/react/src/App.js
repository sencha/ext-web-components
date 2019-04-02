import React, { Component } from 'react';
import '@sencha/ext-components';
import { set } from './extwc';

class App extends Component {

  title = "the title"

  readyButton = (event) => {
    console.log('readyButton')
    this.buttonCmp = event.detail.cmp
  }

  tapButton = (event) => {
    this.buttonCmp.setText('changed')
  }

  columns = [
    {"text": "Name", "width": "250", "dataIndex": "name"},
    {"text": "Email Address", "flex": "1", "dataIndex": "email"},
    {"text": "Phone Number", "width": "250", "dataIndex": "phone"}
  ]
  
  data = [
    {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
    {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
    {"name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244"},
    {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
  ]

  render() {
    return (
      <div>
        <ext-button ref={set({
          text: this.title,
          onready: this.readyButton,
          ontap: this.tapButton
        })}>
        </ext-button>
        <ext-grid ref={set({
          width: '600px',
          height: '300px',
          title: this.title,
          columns: this.columns,
          data: this.data
        })}>
        </ext-grid>
      </div>
    );
  }
}

export default App;
