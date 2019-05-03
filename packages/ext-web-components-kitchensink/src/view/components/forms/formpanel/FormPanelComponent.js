import './FormPanelComponent.html';
Ext.require('Ext.field.InputMask');

export default class FormPanelComponent {

  constructor () {
    this.disabled = false;
    this.componentArray = [];
  }

  toggleDisable = (event) => {
    this.disabled = !this.disabled;
    let buttonText = "Disable All";

    if(this.disabled) {
      buttonText = "Enable All";
    }

    this.buttonCmp.setText(buttonText);
    this.componentArray.forEach(cmp => {
      cmp.setDisabled(this.disabled);
    });
  }

  buttonReady = (event) => {
    this.buttonCmp = event.detail.cmp;
  }

  formpanelReady = (event) => {
    this.formcmp = event.detail.cmp;
  }

  resetform() {
    this.formcmp.reset(true);
  }

  componentReady = (event) => {
    this.componentArray.push(event.detail.cmp);
  }
  
}
