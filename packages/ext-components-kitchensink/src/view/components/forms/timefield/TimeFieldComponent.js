import './TimeFieldComponent.css';
import './TimeFieldComponent.html';
Ext.require('Ext.field.InputMask'); // need to require this specifically for inputMask props to work

export default class TimeFieldComponent {
  constructor () {

    this.disabled = false;

    console.log('in TimeFieldComponent constructor');
  }

  toggleDisable(event) {
    this.disabled = !this.disabled;
    let buttonText = "Disable All";

    if (this.disabled) {
      buttonText = "Enable All";
    }

    this.buttonCmp.setText(buttonText);
    this.timefieldCmp.setDisabled(this.disabled);
  }

  timefieldready(event) {
    this.timefieldCmp = event.detail.cmp;
  }

  buttonready(event) {
    this.buttonCmp = event.detail.cmp;
  }

  resettimefield() {
    this.timefieldCmp.reset(true);
  }
}
