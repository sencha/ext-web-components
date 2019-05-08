import './InsertBetweenComponent.html';

export default class InsertBetweenComponent {
    constructor() {
        this.counter = 0;
    }

  insert = (event) => {
      this.buttonComp = event.detail.cmp;
      this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick = () => {
      const container = document.createElement('ext-container');
      container.html = 'Inserted' + this.counter;
      container.cls = 'insertedComp' + this.counter;
      this.buttonComp.el.dom.insertAdjacentElement('beforebegin', container);
      this.counter++;
  }
}
