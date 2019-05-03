import './SheetComponent.html';

export default class SheetComponent {

  constructor() {
    this.direct = 'left';
    this.modal = true;
    this.reveal = false;
    this.displayed = false;
    this.text = 'Show Menu';
  }

  sheetReady = (event) => {
    this.sheet = event.detail.cmp;
  }

  buttonReady = (event) => {
    this.button = event.detail.cmp;

    if(this.direct === 'left' || this.direct === 'right'){
      this.width = '250'
    } else {
      this.width = 'undefined'
    }

    this.button.setWidth(this.width);
  }

  buttonReady1 = (event) => {
    this.button1 = event.detail.cmp;
    this.button1.setText(this.text);
    this.button1.setPressed(this.displayed);
  }

  buttonReady2 = (event) => {
    this.cmp = event.detail.cmp._text;
    this.button2 = event.detail.cmp;

    if(this.direct == this.cmp) {
      this.button2.setPressed(true);
    } else {
      this.button2.setPressed(false);
    }
  }

  buttonRevealY = (event) => {
    this.buttonRevealY = event.detail.cmp;
    this.buttonRevealY.setPressed(false);
  }

  buttonRevealN = (event) => {
    this.buttonRevealN = event.detail.cmp;
    this.buttonRevealN.setPressed(true);
  }

  buttonModalY = (event) => {
    this.buttonModalY = event.detail.cmp;
    this.buttonModalY.setPressed(true);
  }

  buttonModalN = (event) => {
    this.buttonModalN = event.detail.cmp;
    this.buttonModalN.setPressed(false);
  }

  segmentedbuttonReady = (event) => {
    this.segmentedbutton = event.detail.cmp;
    this.segmentedbutton.setDisabled(this.reveal);
  }

  toggleMenu() {
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
  }

  directRight() {
    this.direct='right';
  }

  directTop() {
    this.direct='top';
  }

  directBottom() {
    this.direct='bottom';
  }

  setReveal() {
    this.reveal = true;
    this.segmentedbutton.setDisabled(this.reveal);
  }

  unsetReveal() {
    this.reveal = false;
    this.segmentedbutton.setDisabled(this.reveal);
  }

  setModal() {
    this.modal = true;
  }

  unsetModal() {
    this.modal = false;
  }
}
