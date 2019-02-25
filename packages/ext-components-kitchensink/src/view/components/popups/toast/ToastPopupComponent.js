import './ToastPopupComponent.css';

export default class ToastPopupComponent {

  constructor () {
    console.log('in ToastPopupComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
