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
        this.sheetCmp = event.detail.cmp;
    }

    buttonReady = (event) => {
        this.buttonCmp = event.detail.cmp;

        if(this.direct === 'left' || this.direct === 'right'){
            this.width = '250';
        } else {
            this.width = 'undefined';
        }

        this.buttonCmp.setWidth(this.width);
    }

    panelButtonReady = (event) => {
        this.panelButtonCmp = event.detail.cmp;
        this.panelButtonCmp.setText(this.text);
        this.panelButtonCmp.setPressed(this.displayed);
    }

    segmentedbuttonReady1 = (event) => {
        this.cmp = event.detail.cmp._text;
        this.segmentedbuttonCmp1 = event.detail.cmp;

        if(this.direct == this.cmp) {
            this.segmentedbuttonCmp1.setPressed(true);
        } else {
            this.segmentedbuttonCmp1.setPressed(false);
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

    segmentedbuttonReady2 = (event) => {
        this.segmentedbuttonCmp2 = event.detail.cmp;
        this.segmentedbuttonCmp2.setDisabled(this.reveal);
    }

    toggleMenu = () => {
        this.displayed = !this.displayed;

        if(this.displayed) {
            this.text = 'Hide Menu';
        } else {
            this.text = 'Show Menu';
        }

        if(this.direct === 'left' || this.direct === 'right'){
            this.width = '250';
        } else {
            this.width = 'undefined';
        }

        this.buttonCmp.setWidth(this.width);
        this.panelButtonCmp.setText(this.text);
        this.panelButtonCmp.setPressed(this.displayed);
        this.sheetCmp.setSide(this.direct);
        this.sheetCmp.setModal(this.modal);
        this.sheetCmp.setReveal(this.reveal);

        this.sheetCmp.setDisplayed(this.displayed);
    }

    onHide = () => {
        this.displayed = false;
        this.text = 'Show Menu';
        this.panelButtonCmp.setText(this.text);
        this.panelButtonCmp.setPressed(false);
        this.sheetCmp.setDisplayed(this.displayed);
    }

    directLeft = () => {
        this.direct='left';
    }

    directRight = () => {
        this.direct='right';
    }

    directTop = () => {
        this.direct='top';
    }

    directBottom = () => {
        this.direct='bottom';
    }

    setReveal = () => {
        this.reveal = true;
        this.segmentedbutton.setDisabled(this.reveal);
    }

    unsetReveal = () => {
        this.reveal = false;
        this.segmentedbutton.setDisabled(this.reveal);
    }

    setModal = () => {
        this.modal = true;
    }

    unsetModal = () => {
        this.modal = false;
    }
}
