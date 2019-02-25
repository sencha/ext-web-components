import './DefaultGaugeComponent.css';

export default class DefaultGaugeComponent {

  constructor () {
    console.log('in DefaultGaugeComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
