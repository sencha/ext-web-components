import '../../charttoolbar/ChartToolbar.js';
import './BasicAreaComponent.css';
import './BasicAreaComponent.html';
// import chartToolbar from '../charttoolbar/chartToolbar.js';

// window.customElements.define('chart-toolbar', chartToolbar);

export default class BasicAreaComponent {

  constructor () {
//    debugger;
//    console.log('in BasicAreaComponent constructor');
  }

  containerready(event) {
//    debugger;
    this.cmp  = event.detail.cmp;
  }

}
