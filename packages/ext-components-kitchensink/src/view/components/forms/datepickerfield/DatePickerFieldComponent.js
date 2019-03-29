import './DatePickerFieldComponent.css';
import './DatePickerFieldComponent.html';

export default class DatePickerFieldComponent {

  constructor () {
  }

  datepickerfieldready(event) {
    this.cmp = event.detail.cmp;
    this.cmp.setValue(new Date());
  }

}
