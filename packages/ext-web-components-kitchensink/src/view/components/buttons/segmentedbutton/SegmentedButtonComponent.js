import './SegmentedButtonComponent.html';

export default class SegmentedButtonComponent {
    constructor() {
        this.button1Cmp = 'low';
        this.button2Cmp = 'low';
        this.isPhone = Ext.os.is.Phone;
    }

    onButton1Change = (event) => {
        this.button1Cmp = event.value;
    }

    onButton2Change = (event) => {
        this.button2Cmp = event.value;
    }
}
