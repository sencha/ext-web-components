import './AdvancedDatePanelComponent.html';

Ext.require('Ext.panel.Date');
Ext.require('Ext.layout.Center');

export default class AdvancedDatePanelComponent {
    containerReady = (event) => {
        this.containerCmp = event.detail.cmp;
        const padding = Ext.os.is.Phone ? 0 : 10;
        this.containerCmp.setPadding(padding);
    }
}
