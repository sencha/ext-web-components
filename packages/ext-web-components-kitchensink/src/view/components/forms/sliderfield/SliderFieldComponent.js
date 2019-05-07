import './SliderFieldComponent.html';

export default class SliderFieldComponent {
    constructor() {
        this.singleValue = 20;
        this.liveUpdateValue = 60;
        this.multipleValue = [10, 70];
    }

    onContainerReady1 = (event) => {
        this.containercmp1 = event.detail.cmp;
        this.containercmp1.setHtml(`Value: ${this.singleValue}`);
    }

    onContainerReady2 = (event) => {
        this.containercmp2 = event.detail.cmp;
        this.containercmp2.setHtml(`Value: ${this.liveUpdateValue}`);
    }

    onContainerReady3 = (event) => {
        this.containercmp3 = event.detail.cmp;
        this.containercmp3.setHtml(`Value: ${this.multipleValue}`);
    }

    onSingleChange = (event) => {
        this.singleValue = event.detail.newValue;
        this.containercmp1.setHtml(`Value: ${event.detail.newValue}`);
    }

    onLiveUpdateChange = (event) => {
        this.liveUpdateValue = event.detail.newValue;
        this.containercmp2.setHtml(`Value: ${event.detail.newValue}`);
    }

    onMultipleChange = (event) => {
        this.multipleValue = event.detail.newValue;
        this.containercmp3.setHtml(`Value: ${event.detail.newValue}`);
    }
}
