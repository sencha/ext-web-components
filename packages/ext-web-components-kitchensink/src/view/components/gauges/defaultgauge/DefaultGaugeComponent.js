import './DefaultGaugeComponent.html';

export default class DefaultGaugeComponent {
    constructor() {
        this.value = 40;
    }

    updateGauges = (event) => {
        if(this.value === event.detail.oldValue[0]){
            this.value = event.detail.newValue;
            this.gauge1Cmp.setValue(this.value);
            this.gauge2Cmp.setValue(this.value);
        }
    }

    item1Ready = (event) => {
        this.gauge1Cmp = event.detail.cmp;
    }

    item2Ready = (event) => {
        this.gauge2Cmp = event.detail.cmp;
    }
}
