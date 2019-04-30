import "./ClassNameUpdateComponent.html";

export default class ClassNameUpdateComponent {
  constructor() {
    this.className = 'Red';
  }

  buttonReady(event) {
    this.buttonComp = event.detail.cmp;
  }

  toggleClass {
    if (this.className === 'Red') {
      this.className = 'Blue';
    } else {
      this.className = 'Red';
    }

    this.buttonComp.setText(this.className);
    this.buttonComp.setCls(this.className)
  }
}
