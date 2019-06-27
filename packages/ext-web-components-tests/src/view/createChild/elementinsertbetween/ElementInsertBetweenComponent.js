import './ElementInsertBetweenComponent.html';

export default class ElementInsertBetweenComponent {
    constructor() {
        this.counter = 0;
    }

    insert = (event) => {
        this.buttonComp = event.detail.cmp;
        this.buttonComp.setHandler(this.buttonClick.bind(this));
    }

    buttonClick = () => {
        const div = document.createElement('div');
        div.className = 'insertedElement' + this.counter;
        div.innerHTML = 'Inserted' + this.counter;

        this.counter++;
        this.buttonComp.el.dom.insertAdjacentElement('beforebegin', div);
    }
}
