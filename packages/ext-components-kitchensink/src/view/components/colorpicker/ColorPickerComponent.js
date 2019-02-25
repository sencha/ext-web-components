import './ColorPickerComponent.css';

export default class ColorPickerComponent {

  constructor () {
    console.log('in ColorPickerComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
