import './DatePickerFieldComponent.html';

export default class DatePickerFieldComponent {
    constructor() {}

    datePickerFieldReady = (event) => {
        this.cmp = event.detail.cmp;
        this.cmp.setValue(new Date());
    }
}
