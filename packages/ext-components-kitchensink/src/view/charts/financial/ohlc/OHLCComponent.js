import './OHLCComponent.css';

export default class OHLCComponent {

  constructor () {
    console.log('in OHLCComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
