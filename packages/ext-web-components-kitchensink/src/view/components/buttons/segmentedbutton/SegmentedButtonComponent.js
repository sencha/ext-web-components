import './SegmentedButtonComponent.html';

export default class SegmentedButtonComponent {
    constructor() {
        this.button1 = 'low';
        this.button2 = 'low';
        this.isPhone = Ext.os.is.Phone;
    }

    onButton1Change = (event) => {
        this.button1 = event.value;
    }

    onButton2Change = (event) => {
        this.button2 = event.value;
    }
}
