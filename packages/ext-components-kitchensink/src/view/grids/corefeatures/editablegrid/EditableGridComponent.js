import './EditableGridComponent.css';

export default class EditableGridComponent {

  constructor () {
    console.log('in EditableGridComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
