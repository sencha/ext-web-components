import './NeedleGaugeComponent.css';

export default class NeedleGaugeComponent {

  constructor () {
    console.log('in NeedleGaugeComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
