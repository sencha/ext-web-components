import './NegativeValuesComponent.css';

export default class NegativeValuesComponent {

  constructor () {
    console.log('in NegativeValuesComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
