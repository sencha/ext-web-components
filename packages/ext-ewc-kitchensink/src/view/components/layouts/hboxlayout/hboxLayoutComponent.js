import './hboxLayoutComponent.html';

export default class hboxLayoutComponent {

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
        this.contCmp1 = event.detail.cmp;
        this.contCmp1.setStyle(this.card.red);
    }

    container2Ready = (event) => {
        this.contCmp2 = event.detail.cmp;
        this.contCmp2.setStyle(this.card.blue);
    }

    container3Ready = (event) => {
        this.contCmp3 = event.detail.cmp;
        this.contCmp3.setStyle(this.card.green);
    }
}
