import './CandlestickComponent.css';

export default class CandlestickComponent {

  constructor () {
    console.log('in CandlestickComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
