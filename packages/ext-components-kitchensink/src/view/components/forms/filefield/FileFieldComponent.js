import './FileFieldComponent.html';

export default class FileFieldComponent {
  constructor () {
    console.log('in FileFieldComponent constructor');
    this.filefield = null;
  }

  onfilefieldchange(event, value) {
    this.filefield = event.detail.newValue;
    this.cmp.setHtml(`You selected ${this.filefield}`);
  }

  containerready(event) {
    this.cmp = event.detail.cmp;
  }
}
