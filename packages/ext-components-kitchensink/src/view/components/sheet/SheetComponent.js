import './SheetComponent.css';
import './SheetComponent.html';

export default class SheetComponent {

  constructor() {
    this.direct = 'left';
    this.modal = true;
    this.reveal = false;
    this.displayed = false;
    this.text = 'Show Menu';
  }

  sheetReady(event) {
    this.sheet = event.detail.cmp;
  }

  buttonReady(event) {
    this.button = event.detail.cmp;

    if(this.direct === 'left' || this.direct === 'right'){
      this.width = '250'
    } else {
      this.width = 'undefined'
    }

    this.button.setWidth(this.width);
  }

  buttonReady1(event){
    this.button1 = event.detail.cmp;
    this.button1.setText(this.text);
    this.button1.setPressed(this.displayed);
  }

  buttonReady2(event){
    this.cmp = event.detail.cmp._text;
    this.button2 = event.detail.cmp;

    if(this.direct == this.cmp) {
      this.button2.setPressed(true);
    } else {
      this.button2.setPressed(false);
    }
  }

  buttonReady3(event){
    this.button3 = event.detail.cmp;
    this.button3.setPressed(this.reveal);
  }

  buttonReady4(event){
    this.button4 = event.detail.cmp;
    this.button4.setPressed(this.modal);
  }

  segmentedbuttonReady(event){
    this.button5 = event.detail.cmp;
    this.button5.setDisabled(this.reveal);
  }

  toggleMenu() {
    debugger;
    this.displayed = !this.displayed;

    if(this.displayed) {
      this.text = 'Hide Menu'
    } else {
      this.text = 'Show Menu'
    }

    if(this.direct === 'left' || this.direct === 'right'){
      this.width = '250'
    } else {
      this.width = 'undefined'
    }

    this.button.setWidth(this.width);
    this.button1.setText(this.text);
    this.button1.setPressed(this.displayed);
    this.sheet.setSide(this.direct);
    this.sheet.setModal(this.modal);
    this.sheet.setReveal(this.reveal);
    this.sheet.setDisplayed(this.displayed);
  }

  onHide() {
    this.displayed = false;
    this.text = 'Show Menu'
    this.button1.setText(this.text);
    this.button1.setPressed(false);
    this.sheet.setDisplayed(this.displayed);
  }

  directLeft() {
    this.direct='left';
    this.sheet.setSide(this.direct);
  }

  directRight() {
    this.direct='right';
    this.sheet.setSide(this.direct);
  }

  directTop() {
    this.direct='top';
    this.sheet.setSide(this.direct);
  }

  directBottom() {
    this.direct='bottom';
    this.sheet.setSide(this.direct);
  }

  setReveal() {
    this.reveal = true;
    this.sheet.setReveal(this.reveal);
  }

  unsetReveal() {
    this.reveal = false;
    this.sheet.setReveal(this.reveal);
  }

  setModal() {
    this.modal = true;
    this.sheet.setModal(this.modal);
  }

  unsetModal() {
    this.modal = false;
    this.sheet.setModal(this.modal);
  }
}
