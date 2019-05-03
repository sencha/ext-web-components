import './DialogPopupComponent.html';

export default class DialogPopupComponent {

  constructor () {
    this.isDialogShowing = false;
  }

  dialogReady = (event) => {
    this.dialog = event.detail.cmp;
  }

  showDialog(){
    this.dialog.setDisplayed(!this.isDialogShowing);
  }

  onHide(){
    this.dialog.setDisplayed(this.isDialogShowing);
  }

  onCancel(){
    this.dialog.setDisplayed(this.isDialogShowing);
  }

  onOk(){
    this.dialog.setDisplayed(this.isDialogShowing);
  }

}
