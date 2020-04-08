import './SingleEventComponent.html';

export default class SingleEventComponent {
    constructor() {
        this.count = 0;
    }

    onButtontap = () => {
        this.count++;
        const allResultDivs = document.getElementsByClassName('result-div-single-event');

        for (const resutDiv of allResultDivs) {
            resutDiv.innerHTML = this.count;
        }
    }
}
