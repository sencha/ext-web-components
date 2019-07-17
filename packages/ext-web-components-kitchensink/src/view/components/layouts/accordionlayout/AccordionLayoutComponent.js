import './AccordionLayoutComponent.html';

export default class AccordionLayoutComponent {
    constructor() {
        this.gaugeValue = 40;
    }
	
    onAccordionReady(event) {
        this.accordionCmp = event.detail.cmp;
        this.accordionCmp.setOpenable(2);
    }

    updateGauges = (event) => {
        if(this.gaugeValue === event.detail.oldValue[0]){
            this.gaugeValue = event.detail.newValue;
            this.gauge1Cmp.setValue(this.gaugeValue);
            this.gauge2Cmp.setValue(this.gaugeValue);
        }
    }

    gauge1Ready = (event) => {
        this.gauge1Cmp = event.detail.cmp;
    }

    gauge2Ready = (event) => {
        this.gauge2Cmp = event.detail.cmp;
    }
}
