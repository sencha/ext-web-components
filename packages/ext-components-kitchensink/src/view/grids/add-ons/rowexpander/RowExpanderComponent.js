import './RowExpanderComponent.css';

export default class RowExpanderComponent {

  constructor () {
    console.log('in RowExpanderComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
