import "./RelDialogComponent.html";

export default class RelDialogComponent {
  constructor() {}

  onDialogReady(event) {
    this.dialogCmp = event.detail.cmp;
  }

  onClick {
    this.dialogCmp.setDisplayed(false);
  }
}
