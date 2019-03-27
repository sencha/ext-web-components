import './TimePanelComponent.html';

Ext.require('Ext.panel.Time');

export default class TimePanelComponent {

  constructor () {
    console.log('in TimePanelComponent constructor');
  }

  containerready(event) {
    this.containerCmp = event.detail.cmp;
    this.containerCmp.setPadding(Ext.os.is.Phone ? 0 : 10);
    this.containerCmp.setLayout(Ext.os.is.Phone ? 'fit' : 'auto');
  }
}