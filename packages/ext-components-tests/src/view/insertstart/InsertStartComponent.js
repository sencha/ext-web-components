import "./InsertStartComponent.html";

export default class InsertStartComponent {
  constructor() {}

  panelReady(event) {
    this.panelComp = event.detail.cmp;
  }

  buttonReady(event) {
    this.buttonComp = event.detail.cmp;
    this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick() {
    const panelDomNode = this.panelComp.getRenderTarget().dom;
    const container = document.createElement("ext-container");
    container.setAttribute(itemId, "inserted");
    container.innerHTML = "Inserted";
    panelDomNode.prepend(div);
  }
}
