import './SliderFieldComponent.html';

export default class SliderFieldComponent {
    constructor() {
        this.singleValue = 20;
        this.liveUpdateValue = 60;
        this.multipleValue = [10, 70];
    }

    onSingleThumbReady = (event) => {
        this.singleThumbCmp = event.detail.cmp;
        this.singleThumbCmp.setHtml(`Value: ${this.singleValue}`);
    }

    onLiveUpdateReady = (event) => {
        this.liveupdateCmp = event.detail.cmp;
        this.liveupdateCmp.setHtml(`Value: ${this.liveUpdateValue}`);
    }

    onMultipleThumbReady = (event) => {
        this.multipleThumbCmp = event.detail.cmp;
        this.multipleThumbCmp.setHtml(`Value: ${this.multipleValue}`);
    }

    onSingleThumbChange = (event) => {
        this.singleValue = event.detail.newValue;
        this.singleThumbCmp.setHtml(`Value: ${event.detail.newValue}`);
    }

    onLiveUpdateChange = (event) => {
        this.liveUpdateValue = event.detail.newValue;
        this.liveupdateCmp.setHtml(`Value: ${event.detail.newValue}`);
    }

    onMultipleThumbChange = (event) => {
        this.multipleValue = event.detail.newValue;
        this.multipleThumbCmp.setHtml(`Value: ${event.detail.newValue}`);
    }
}
