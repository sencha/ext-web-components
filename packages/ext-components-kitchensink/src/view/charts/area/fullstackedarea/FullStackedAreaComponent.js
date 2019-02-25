import './FullStackedAreaComponent.css';

export default class FullStackedAreaComponent {

  constructor () {
    console.log('in FullStackedAreaComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
