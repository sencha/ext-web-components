import './FieldSetComponent.css';

export default class FieldSetComponent {

  constructor () {
    console.log('in FieldSetComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
