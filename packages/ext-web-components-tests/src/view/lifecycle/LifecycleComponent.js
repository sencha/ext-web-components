import MyComponent from './MyComponent.js';
import "./LifecycleComponent.html";

export default class LifecycleComponent {
  constructor() {}

  deleteChild(event) {
    let myComp = document.getElementById('my-component-id');
    myComp.parentNode.removeChild(myComp);
    myComp = document.getElementById('my-component-id');
    myComp.parentNode.removeChild(myComp);
  }
}
