import './InsertEndComponent.html';

export default class InsertEndComponent {
    constructor() {
        this.counter = 0;
    }

    insert = (event) => {
        this.buttonComp = event.detail.cmp;
        this.buttonComp.setHandler(this.buttonClick.bind(this));
    }

    buttonClick = () => {
        const container = document.createElement('ext-container');
        this.buttonComp.el.dom.insertAdjacentElement('afterend', container);
        container.html = 'Inserted' + this.counter;
        container.cls = 'insertedComp' + this.counter;
        this.counter++;
    }
}
