import './SpinnerFieldComponent.css';

export default class SpinnerFieldComponent {

  constructor () {
    console.log('in SpinnerFieldComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
