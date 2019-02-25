import './StockTickerComponent.css';

export default class StockTickerComponent {

  constructor () {
    console.log('in StockTickerComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
