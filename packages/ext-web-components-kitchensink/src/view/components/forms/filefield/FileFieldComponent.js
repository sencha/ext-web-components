import './FileFieldComponent.html';

export default class FileFieldComponent {
    constructor() {
        this.filefield = null;
    }

    onFileFieldChange = (event) => {
        this.filefield = event.detail.newValue;
        this.cmp.setHtml(`You selected ${this.filefield}`);
    }

    containerReady = (event) => {
        this.cmp = event.detail.cmp;
    }
}
