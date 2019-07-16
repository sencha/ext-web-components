import './TimePanelComponent.html';

Ext.require('Ext.panel.Time');

export default class TimePanelComponent {
    constructor() {}

    onMeridiemChange = (event) => {
        const value = event.detail.newValue;
        if (value) {
            this.isPMHoursToggleCmp.setValue(false);
            this.isPMHoursToggleCmp.setDisabled(true);
        } else {
            this.isPMHoursToggleCmp.setDisabled(false);
        }
        this.timepanel.setMeridiem(value);
    }

    onPMHoursChange = (event) => {
        this.timepanel.setAlignPMInside(event.detail.newValue);
    }

    onIsPMHoursToggleCmpReady = (event) => {
        this.isPMHoursToggleCmp = event.detail.cmp;
    }

    timepanelReady = (event) => {
        this.timepanel = event.detail.cmp;
    }
}
