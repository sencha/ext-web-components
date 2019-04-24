import "./InsertBetweenComponent.html";

export default class InsertBetweenComponent {
  constructor() {}

  insert(event) {
    this.buttonComp = event.detail.cmp;
    this.buttonComp.setHandler(this.buttonClick.bind(this));
  }

  buttonClick() {
    const buttonDomNode = document.getElementById('insert-between-button');
    const container = document.createElement("ext-container");
    container.itemId = "inserted";
    container.html = "Inserted";
    buttonDomNode.insertAdjacentElement('beforebegin', container);
  }
}
