import './RealtimeComponent.css';

export default class RealtimeComponent {

  constructor () {
    console.log('in RealtimeComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
