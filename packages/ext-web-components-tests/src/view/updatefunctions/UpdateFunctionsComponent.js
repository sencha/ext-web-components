import "./UpdateFunctionsComponent.html";

export default class UpdateFunctionsComponent {
  constructor() {
    this.counter1 = 0;
    this.counter2 = 0;
  }

  buttonready1(event) {
    this.buttonComp1 = event.detail.cmp;
  }

  buttonReady2 {
    this.buttonComp2 = event.detail.cmp;
  }

  handler {
    this.counter1++;
    this.buttonComp1.setText(this.counter1);
  }

  onClick {
    this.counter2++;
    this.buttonComp2.setText(this.counter2)
  }
}
