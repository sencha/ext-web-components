import './CalendarDragResizeValidationComponent.css';

export default class CalendarDragResizeValidationComponent {

  constructor () {
    console.log('in CalendarDragResizeValidationComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
