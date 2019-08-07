import './TimeFieldComponent.html';
Ext.require('Ext.field.InputMask'); // need to require this specifically for inputMask props to work

export default class TimeFieldComponent {
    constructor() {
        this.disabled = false;
    }

    toggleDisable = () => {
        this.disabled = !this.disabled;
        let buttonText = 'Disable All';

        if (this.disabled) {
            buttonText = 'Enable All';
        }

        this.buttonCmp.setText(buttonText);
        this.timefieldCmp.setDisabled(this.disabled);
    }

    timeFieldReady = (event) => {
        this.timefieldCmp = event.detail.cmp;
    }

    buttonReady = (event) => {
        this.buttonCmp = event.detail.cmp;
    }

    resetTimeField = () => {
        this.timefieldCmp.reset(true);
    }
}
