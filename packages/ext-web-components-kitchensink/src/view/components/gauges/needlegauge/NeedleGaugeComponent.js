import './NeedleGaugeComponent.html';

export default class NeedleGaugeComponent {
    constructor() {
        this.value = 30;
        this.outerradius = {outerRadius:'100%'};
        this.innerradius = {type:'arrow'};
    }

    updateGauges = (event) => {
        if(this.value === event.detail.oldValue[0]){
            this.value = event.detail.newValue;
            this.gauge1.setValue(this.value);
            this.gauge2.setValue(this.value);
            this.gauge3.setValue(this.value);
            this.gauge4.setValue(this.value);
        }
    }

    item1Ready = (event) => {
        this.gauge1 = event.detail.cmp;
        this.gauge1.setNeedle(this.outerradius);
    }

    item2Ready = (event) => {
        this.gauge2 = event.detail.cmp;
    }

    item3Ready = (event) => {
        this.gauge3 = event.detail.cmp;
    }

    item4Ready = (event) => {
        this.gauge4 = event.detail.cmp;
        this.gauge4.setNeedle(this.innerradius);
    }
}
