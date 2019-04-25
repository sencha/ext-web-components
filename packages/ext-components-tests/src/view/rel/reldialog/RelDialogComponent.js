import "./RelDialogComponent.html";

export default class RelDialogComponent {
  constructor() {}

  onDialogReady(event) {
    debugger;
    this.dialog = event.detail.cmp;
  }

  onClick(event) {
    debugger;
    console.log(this.dialog);
    this.dialog.hide();
  }
}
