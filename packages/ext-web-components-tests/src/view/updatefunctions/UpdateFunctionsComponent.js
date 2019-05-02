import "./UpdateFunctionsComponent.html";

export default class UpdateFunctionsComponent {
  constructor() {
    this.counter1 = 0;
    this.counter2 = 0;

    this.handler = this.handler.bind(this);
  }

  buttonReady1(event) {
    this.buttonComp1 = event.detail.cmp;
  }

  buttonReady2(event) {
    this.buttonComp2 = event.detail.cmp;
  }

  onClick() {
    this.counter1++;
    this.buttonComp1.setText(this.counter1);
  }

  handler() {
    this.counter2++;
    this.buttonComp2.setText(this.counter2);
  }
}
