import './SliderFieldComponent.html';

export default class SliderFieldComponent {
    constructor() {
        this.singleValue = 20;
        this.liveUpdateValue = 60;
        this.multipleValue = [10, 70];
    }

    onSingleContainerReady = (event) => {
        this.singleContainerCmp = event.detail.cmp;
        this.singleContainerCmp.setHtml(`Value: ${this.singleValue}`);
    }

    onLiveUpdateContainerReady = (event) => {
        this.liveupdateContainerCmp = event.detail.cmp;
        this.liveupdateContainerCmp.setHtml(`Value: ${this.liveUpdateValue}`);
    }

    onMultipleContainerReady = (event) => {
        this.multipleContainerCmp = event.detail.cmp;
        this.multipleContainerCmp.setHtml(`Value: ${this.multipleValue}`);
    }

    onSingleChange = (event) => {
        this.singleValue = event.detail.newValue;
        this.singleContainerCmp.setHtml(`Value: ${event.detail.newValue}`);
    }

    onLiveUpdateChange = (event) => {
        this.liveUpdateValue = event.detail.newValue;
        this.liveupdateContainerCmp.setHtml(`Value: ${event.detail.newValue}`);
    }

    onMultipleChange = (event) => {
        this.multipleValue = event.detail.newValue;
        this.multipleContainerCmp.setHtml(`Value: ${event.detail.newValue}`);
    }
}
