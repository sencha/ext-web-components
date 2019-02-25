import './UndoableAccordionSwiperComponent.css';

export default class UndoableAccordionSwiperComponent {

  constructor () {
    console.log('in UndoableAccordionSwiperComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
