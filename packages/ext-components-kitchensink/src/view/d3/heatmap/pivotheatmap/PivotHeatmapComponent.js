import './PivotHeatmapComponent.html';

export default class PivotHeatmapComponent {

  constructor() { }

  pivotHeatMapReady(event) {
    debugger; let cmp = event.detail.cmp;
    console.log(event.detail.cmp, 'event')
  }

}
