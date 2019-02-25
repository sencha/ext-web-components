import './PivotGridWidgetsComponent.css';

export default class PivotGridWidgetsComponent {

  constructor () {
    console.log('in PivotGridWidgetsComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
