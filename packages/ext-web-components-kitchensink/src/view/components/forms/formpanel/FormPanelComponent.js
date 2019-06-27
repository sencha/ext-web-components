import './FormPanelComponent.html';
Ext.require('Ext.field.InputMask');

export default class FormPanelComponent {
    constructor() {
        this.disabled = false;
        this.componentArray = [];
    }

    toggleDisable = () => {
        this.disabled = !this.disabled;
        let buttonText = 'Disable All';

        if(this.disabled) {
            buttonText = 'Enable All';
        }

        this.buttonCmp.setText(buttonText);
        this.componentArray.forEach(cmp => {
            cmp.setDisabled(this.disabled);
        });
    }

    buttonReady = (event) => {
        this.buttonCmp = event.detail.cmp;
    }

    formPanelReady = (event) => {
        this.formCmp = event.detail.cmp;
    }

    resetForm = () => {
        this.formCmp.reset(true);
    }

    spinnerReady = () => {
      this.spinnerCmp = event.detail.cmp;
      this.spinnerCmp.setMinValue(0);
      this.componentArray.push(event.detail.cmp);
    }

    componentReady = (event) => {
        this.componentArray.push(event.detail.cmp);
    }
}
