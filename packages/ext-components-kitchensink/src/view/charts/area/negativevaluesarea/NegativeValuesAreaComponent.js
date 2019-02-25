import './NegativeValuesAreaComponent.css';

export default class NegativeValuesAreaComponent {

  constructor () {
    console.log('in NegativeValuesAreaComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
