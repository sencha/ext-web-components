import "./ElementInsertEndComponent.html";

export default class ElementInsertEndComponent {
  constructor() {}

  insert(event) {
    this.buttonComp = event.detail.cmp;
    this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick() {
    const buttonDomNode = this.buttonComp.el.dom;
    const div = document.createElement("div");
    div.id = "inserted";
    div.innerHTML = "Inserted";
    buttonDomNode.insertAdjacentElement('afterend', div);
  }
}
