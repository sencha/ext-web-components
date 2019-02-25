import './UndoableStepSwiperComponent.css';

export default class UndoableStepSwiperComponent {

  constructor () {
    console.log('in UndoableStepSwiperComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
