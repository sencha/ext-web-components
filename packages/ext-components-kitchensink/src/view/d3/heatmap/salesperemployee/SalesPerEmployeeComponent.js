import './SalesPerEmployeeComponent.html';

export default class SalesPerEmployeeComponent {

  constructor () {}

  d3heatmapReady(event) {
    debugger;
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
