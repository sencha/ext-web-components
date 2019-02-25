import './ConfiguratorPluginComponent.css';

export default class ConfiguratorPluginComponent {

  constructor () {
    console.log('in ConfiguratorPluginComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
