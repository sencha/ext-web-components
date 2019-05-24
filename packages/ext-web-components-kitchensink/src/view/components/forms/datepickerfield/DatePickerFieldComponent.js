import './DatePickerFieldComponent.html';

export default class DatePickerFieldComponent {
    constructor() {}

    datePickerFieldReady = (event) => {
        this.datePickerCmp = event.detail.cmp;
        this.datePickerCmp.setValue(new Date());
    }
}
