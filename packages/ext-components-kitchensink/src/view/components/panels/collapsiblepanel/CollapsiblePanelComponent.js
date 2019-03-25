import './CollapsiblePanelComponent.css';
import './CollapsiblePanelComponent.html';
import {mediumText} from './CollapsiblePanelComponentDummy.js';

Ext.require('Ext.panel.Collapser');

export default class CollapsiblePanelComponent {

  constructor () {
    console.log('in CollapsiblePanelComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
