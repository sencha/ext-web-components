import "./RelDialogComponent.html";

export default class RelDialogComponent {
  constructor() {}

  onDialogReady(event) {
    this.dialog = event.detail.cmp;
  }

  onClick(event) {
    this.dialog.setDisplayed(false);
  }
}
