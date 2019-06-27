import './SpinnerFieldComponent.html';

export default class SpinnerFieldComponent {
    constructor() {}

    onSpinnerReady = ({ detail: {cmp}}) => {
        this.spinnerCmp = cmp;
        this.spinnerCmp.setMinValue(0);
    }
}
