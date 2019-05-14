import './LifecycleComponent.html';

export default class LifecycleComponent {
    constructor() {}

    deleteChild = () => {
        let myComp = document.getElementById('my-component-id');
        myComp.parentNode.removeChild(myComp);
    }
}
