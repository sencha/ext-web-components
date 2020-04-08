import './BasicEventComponent.html';

export default class BasicEventComponent {
    constructor() {}

    panelReady = () => {
        this.panel = event.detail.cmp;
    }

    onButtontap = (event) => {
        this.panel.setHtml('Tapped');
        event.currentTarget.text = 'Tapped';
    }
}
