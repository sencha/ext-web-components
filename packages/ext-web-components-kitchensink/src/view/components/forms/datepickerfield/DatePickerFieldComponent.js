import './DatePickerFieldComponent.html';

export default class DatePickerFieldComponent {
  constructor () {}

  datepickerfieldReady = (event) => {
    this.cmp = event.detail.cmp;
    this.cmp.setValue(new Date());
  }
}
