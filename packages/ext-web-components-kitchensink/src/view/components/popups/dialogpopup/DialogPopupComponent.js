import './DialogPopupComponent.html';

export default class DialogPopupComponent {

    constructor() {
        this.isDialogShowing = false;
    }

    dialogReady = (event) => {
        this.dialogCmp = event.detail.cmp;
    }

    showDialog = () => {
        this.dialogCmp.setDisplayed(!this.isDialogShowing);
    }

    onHide = () => {
        this.dialogCmp.setDisplayed(this.isDialogShowing);
    }

    onCancel = () => {
        this.dialogCmp.setDisplayed(this.isDialogShowing);
    }

    onOk = () => {
        this.dialogCmp.setDisplayed(this.isDialogShowing);
    }
}
