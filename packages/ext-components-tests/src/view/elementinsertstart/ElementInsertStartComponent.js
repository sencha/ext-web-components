import "./ElementInsertStartComponent.html";

export default class ElementInsertStartComponent {
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
    const div = document.createElement("div");
    div.id = "inserted";
    div.innerHTML = "Inserted";
    panelDomNode.prepend(div);
  }
}
