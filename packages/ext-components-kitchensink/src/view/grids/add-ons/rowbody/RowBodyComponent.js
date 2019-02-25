import './RowBodyComponent.css';

export default class RowBodyComponent {

  constructor () {
    console.log('in RowBodyComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
