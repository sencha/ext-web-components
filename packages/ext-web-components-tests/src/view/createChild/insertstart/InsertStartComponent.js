import "./InsertStartComponent.html";

export default class InsertStartComponent {
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
    const panelDomNode = this.panelComp.getRenderTarget().dom;
    const container = document.createElement("ext-container");
    container.cls = "insertedComp" + this.counter;
    container.html = "Inserted" + this.counter;
    panelDomNode.prepend(container);
    this.counter++;
  }
}
