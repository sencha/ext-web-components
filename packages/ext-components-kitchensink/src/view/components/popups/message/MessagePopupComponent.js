import './MessagePopupComponent.css';

export default class MessagePopupComponent {

  constructor () {
    console.log('in MessagePopupComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
