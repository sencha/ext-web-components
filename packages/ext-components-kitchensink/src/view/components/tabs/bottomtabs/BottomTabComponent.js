import './BottomTabComponent.css';

export default class BottomTabComponent {

  constructor () {
    console.log('in BottomTabComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
