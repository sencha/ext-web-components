import './BasicDatePanelComponent.html';
Ext.require('Ext.panel.Date');

export default class BasicDatePanelComponent {
    readycontainer1 = (event) => {
        this.containerCmp = event.detail.cmp;
        const padding = Ext.os.is.Phone ? 0 : 10;
        this.containerCmp.setPadding(padding);
    }
}
