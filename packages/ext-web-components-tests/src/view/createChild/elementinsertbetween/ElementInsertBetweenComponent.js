import "./ElementInsertBetweenComponent.html";

export default class ElementInsertBetweenComponent {
  constructor() {}

  insert(event) {
    this.buttonComp = event.detail.cmp;
    this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick() {
    const buttonDomNode = document.getElementById('element-insert-between-button');
    const div = document.createElement("div");
    div.id = "inserted";
    div.innerHTML = "Inserted";
    buttonDomNode.insertAdjacentElement('beforebegin', div);
  }
}
