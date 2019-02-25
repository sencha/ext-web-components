import './TouchEventsComponent.css';

export default class TouchEventsComponent {

  constructor () {
    console.log('in TouchEventsComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
