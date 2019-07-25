import './CardLayoutComponent.html';

export default class CardLayoutComponent {
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

        this.animation = null;
        this.activeCard = 0;
        this.animationDefaults = {
            duration: 500,
            easing: 'ease-in-out'
        };

        this.contents = [
            { text: 'Slide Left', animation: { type: 'slide', direction: 'left', ...this.animationDefaults } },
            { text: 'Slide Right', animation: { type: 'slide', direction: 'right', ...this.animationDefaults } },
            { text: 'Slide Up', animation: { type: 'slide', direction: 'up', ...this.animationDefaults } },
            { text: 'Slide Down', margin: '0 0 20 0', animation: { type: 'slide', direction: 'down', ...this.animationDefaults } },
            { text: 'Cover Left', animation: { type: 'cover', direction: 'left', ...this.animationDefaults } },
            { text: 'Cover Right', animation: { type: 'cover', direction: 'right', ...this.animationDefaults } },
            { text: 'Cover Up', animation: { type: 'cover', direction: 'up', ...this.animationDefaults } },
            { text: 'Cover Down', margin: '0 0 20 0', animation: { type: 'cover', direction: 'down', ...this.animationDefaults } },
            { text: 'Reveal Left', animation: { type: 'reveal', direction: 'left', ...this.animationDefaults } },
            { text: 'Reveal Right', animation: { type: 'reveal', direction: 'right', ...this.animationDefaults } },
            { text: 'Reveal Up', animation: { type: 'reveal', direction: 'up', ...this.animationDefaults } },
            { text: 'Reveal Down', margin: '0 0 20 0', animation: { type: 'reveal', direction: 'down', ...this.animationDefaults } },
            { text: 'Fade', animation: { type: 'fade', ...this.animationDefaults } },
            { text: 'Pop', animation: { type: 'pop', ...this.animationDefaults } },
            { text: 'Flip', animation: { type: 'flip', ...this.animationDefaults } }
        ];
    }

    switchCards = (event) => {
        const buttonText = event.srcElement.text;
        const targetItem = this.contents.filter(function(button) {return button.text === buttonText;})[0];
        console.log(targetItem);

        this.animation = targetItem.animation;

        if (this.activeCard === 0) {
            this.activeCard = 1;
        } else {
            this.activeCard = 0;
        }
        this.contParentCmp.setLayout({ animation: this.animation });
        this.contParentCmp.setActiveItem(this.activeCard);
    }

    onPanel1Ready = (event) => {
        this.displayPanel1Cmp = event.detail.cmp;
        this.displayPanel1Cmp.setBodyStyle(this.card.blue);
    }

    onPanel2Ready = (event) => {
        this.displayPanel2Cmp = event.detail.cmp;
        this.displayPanel2Cmp.setBodyStyle(this.card.green);
    }

    onParentContainerReady = (event) => {
        this.contParentCmp = event.detail.cmp;
    }

    onChildContainer1Ready = (event) => {
        this.contChildCmp1 = event.detail.cmp;

        for (let buttonItem of this.contents) {
            const buttonElement = document.createElement('ext-button');

            if (buttonItem.margin) {
                buttonElement.margin = buttonItem.margin;
            }
            buttonElement.text = buttonItem.text;
            buttonElement.ui = 'alt';
            buttonElement.width = '100%';
            buttonElement.setAttribute('onTap', 'cardlayout.switchCards');
            buttonElement.setAttribute('animation', buttonItem.animation);
            buttonElement.animation = buttonItem.animation;
            this.contChildCmp1.el.dom.appendChild(buttonElement);
        }
    }

    onChildContainer2Ready = (event) => {
        this.contChildCmp2 = event.detail.cmp;

        for (let buttonItem of this.contents) {
            const buttonElement = document.createElement('ext-button');

            if (buttonItem.margin) {
                buttonElement.margin = buttonItem.margin;
            }

            buttonElement.text = buttonItem.text;
            buttonElement.ui = 'alt';
            buttonElement.setAttribute('onTap', 'cardlayout.switchCards');
            this.contChildCmp2.el.dom.append(buttonElement);
        }
    }
}
