import './ResizableHandleComponent.html';
import { mediumText } from './ResizableHandleComponentDummy.js';

Ext.require('Ext.panel.Resizer');

export default class ResizableHandleComponent {
  constructor () {}

  panelReady = (event) => {
    this.panelCmp = event.detail.cmp;
    this.panelCmp.center();
    this.panelCmp.setResizable({
      edges: 'all',
      dynamic: false
    });
  }

  checkboxFieldReady = (event) => {
    this.checkboxfieldCmp = event.detail.cmp;
    this.checkboxfieldCmp.setChecked(false);
  }

  onCheckboxChange = (event) => {
    this.checkboxfieldCmp.setChecked(event.detail.newValue);
    this.panelCmp.setResizable({
      edges: 'all',
      dynamic: event.detail.newValue
    });
  }

  containerReady = (event) => {
    this.containerCmp = event.detail.cmp;
    this.containerCmp.setHtml(mediumText);
  }
}
