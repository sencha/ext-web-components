import './DatePickerFieldComponent.css';
import './DatePickerFieldComponent.html';

export default class DatePickerFieldComponent {
  constructor () {
    console.log('in DatePickerFieldComponent constructor');
  }

  datepickerfieldready(event) {
    this.cmp = event.detail.cmp;
    this.cmp.setValue(new Date());
  }
}
