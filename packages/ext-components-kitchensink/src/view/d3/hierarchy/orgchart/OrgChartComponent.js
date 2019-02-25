import './OrgChartComponent.css';

export default class OrgChartComponent {

  constructor () {
    console.log('in OrgChartComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
