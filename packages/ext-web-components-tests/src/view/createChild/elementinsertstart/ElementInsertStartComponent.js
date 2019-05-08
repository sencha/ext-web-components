import './ElementInsertStartComponent.html';

export default class ElementInsertStartComponent {
    constructor() {
        this.counter = 0;
    }

  panelReady = (event) => {
      this.panelComp = event.detail.cmp;
  }

  buttonReady = (event) => {
      this.buttonComp = event.detail.cmp;
      this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick = () => {
      const div = document.createElement('div');
      div.id = 'inserted';
      div.className = 'insertedElement' + this.counter;
      div.innerHTML = 'Inserted' + this.counter;
      this.panelComp.getRenderTarget().dom.prepend(div);
      this.counter++;
  }
}
