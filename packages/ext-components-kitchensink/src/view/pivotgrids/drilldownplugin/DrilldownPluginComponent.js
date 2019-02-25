import './DrilldownPluginComponent.css';

export default class DrilldownPluginComponent {

  constructor () {
    console.log('in DrilldownPluginComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
