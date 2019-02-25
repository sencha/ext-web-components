import './BasicStepSwiperComponent.css';

export default class BasicStepSwiperComponent {

  constructor () {
    console.log('in BasicStepSwiperComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
