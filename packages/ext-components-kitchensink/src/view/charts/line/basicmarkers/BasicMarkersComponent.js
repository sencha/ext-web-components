import './BasicMarkersComponent.css';

export default class BasicMarkersComponent {

  constructor () {
    console.log('in BasicMarkersComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
