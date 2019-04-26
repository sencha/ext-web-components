import "./RelDialogComponent.html";

export default class RelDialogComponent {
  constructor() {}

  onDialogReady(event) {
    this.dialogCmp = event.detail.cmp;
  }

  onClick(event) {
    this.dialogCmp.setDisplayed(false);
  }
}
