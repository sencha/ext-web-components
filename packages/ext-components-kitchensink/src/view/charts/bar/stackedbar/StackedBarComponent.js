import './StackedBarComponent.css';

export default class StackedBarComponent {

  constructor () {
    console.log('in StackedBarComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
