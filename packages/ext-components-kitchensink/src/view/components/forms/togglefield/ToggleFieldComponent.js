import './ToggleFieldComponent.css';

export default class ToggleFieldComponent {

  constructor () {
    console.log('in ToggleFieldComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
