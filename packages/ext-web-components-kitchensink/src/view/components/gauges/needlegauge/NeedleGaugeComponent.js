import './NeedleGaugeComponent.html';
Ext.require('Ext.ux.gauge.needle.Diamond');
Ext.require('Ext.ux.gauge.needle.Arrow');
Ext.require('Ext.ux.gauge.needle.Wedge');
Ext.require('Ext.ux.gauge.needle.Spike');

export default class NeedleGaugeComponent {
    constructor() {
        this.value = 30;
        this.outerradius = {type: 'diamond', outerRadius:'100%'};
        this.innerradius = {type:'arrow', innerRadius: 0};
    }

    updateGauges = (event) => {
        if(this.value === event.detail.oldValue[0]){
            this.value = event.detail.newValue;
            this.gauge1Cmp.setValue(this.value);
            this.gauge2Cmp.setValue(this.value);
            this.gauge3Cmp.setValue(this.value);
            this.gauge4Cmp.setValue(this.value);
        }
    }

    item1Ready = (event) => {
        console.log(event)
        this.gauge1Cmp = event.detail.cmp;
        this.gauge1Cmp.setNeedle(this.outerradius);
    }

    item2Ready = (event) => {
        console.log(event)
        this.gauge2Cmp = event.detail.cmp;
    }

    item3Ready = (event) => {
        console.log(event)
        this.gauge3Cmp = event.detail.cmp;
    }

    item4Ready = (event) => {
        console.log(event)
        this.gauge4Cmp = event.detail.cmp;
        this.gauge4Cmp.setNeedle(this.innerradius);
    }
}
