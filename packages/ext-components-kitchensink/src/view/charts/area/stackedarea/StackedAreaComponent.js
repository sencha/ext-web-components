import './StackedAreaComponent.css';

export default class StackedAreaComponent {

  constructor () {
    console.log('in StackedAreaComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
