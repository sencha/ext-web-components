import './SliderFieldComponent.css';

export default class SliderFieldComponent {

  constructor () {
    console.log('in SliderFieldComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
