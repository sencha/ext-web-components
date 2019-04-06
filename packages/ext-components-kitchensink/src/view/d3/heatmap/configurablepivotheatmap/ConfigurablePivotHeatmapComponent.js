import './ConfigurablePivotHeatmapComponent.html';

export default class ConfigurablePivotHeatmapComponent {

  constructor () {
    console.log('in ConfigurablePivotHeatmapComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
