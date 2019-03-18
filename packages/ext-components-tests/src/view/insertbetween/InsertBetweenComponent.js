import "./InsertBetweenComponent.html";

export default class InsertBetweenComponent {
  constructor() {}

  insert(event) {
    this.buttonComp = event.detail.cmp;
    this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick() {
    const buttonDomNode = this.buttonComp.el.dom;
    const container = document.createElement("ext-container");
    container.setAttribute(itemId, "inserted");
    container.innerHTML = "Inserted";
    buttonDomNode.insertAdjacentElement('beforebegin', container);
  }
}
