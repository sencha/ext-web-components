import './vboxLayoutComponent.scss';
import './vboxLayoutComponent.html';

export default class vboxLayoutComponent {
    constructor() {
        this.card = {
            blue: {
                fontSize: '16px',
                padding: '10px',
                backgroundColor: '#673ab7',
                color: 'white'
            },
            green: {
                fontSize: '16px',
                padding: '10px',
                backgroundColor: '#7c4dff',
                color: 'white'
            },
            red: {
                fontSize: '16px',
                padding: '10px',
                backgroundColor: '#00bcd4',
                color: 'white'
            }
        };
    }

    container1Ready = (event) => {
        this.cont1Cmp = event.detail.cmp;
        this.cont1Cmp.setStyle(this.card.red);
    }

    container2Ready = (event) => {
        this.cont2Cmp = event.detail.cmp;
        this.cont2Cmp.setStyle(this.card.blue);
    }

    container3Ready = (event) => {
        this.cont3Cmp = event.detail.cmp;
        this.cont3Cmp.setStyle(this.card.green);
    }
}
