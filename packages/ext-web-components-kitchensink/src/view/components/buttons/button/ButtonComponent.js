import './ButtonComponent.html';

export default class ButtonComponent {
    constructor() {
        this.style = 'None';
        this.type = 'Text';
        this.menuButtons = [];
        this.iconButtons = [];
        this.styleButtons = [];
        this.iconCls = '';
        this.menuItem = '';
    }

    buttonReady = (event) => {
        this.menuButtons.push(event.detail.cmp);
    }

    // menuItem = (event) => {
    //     this.menuItem = event.detail.cmp;
    // }

    toggleReady = (event) => {
        this.toggleButtonCmp = event.detail.cmp;
    }

    toggleRound = () => {
        this.round = !this.round;

        if (this.round) {
            this.toggleButtonCmp.setIconCls('x-font-icon md-icon-check');
            this.menuButtons.forEach(buttons => {
                buttons.setUi('round');
            });

        }
        else {
            this.toggleButtonCmp.setIconCls(null);
            this.menuButtons.forEach(buttons => {
                buttons.setUi('');
            });
        }
    };

    styleMenuItemChange = (sender, value) => {
        this.style = value._text;
        this.styleButtons.forEach(menuItem => {
            const menuItemText = menuItem._text;

            if (menuItemText === this.style) {
                menuItem.setIconCls('x-font-icon md-icon-check');
            } else {
                menuItem.setIconCls(null);
            }
        });

        if (this.style === 'Menu') {
            this.menuButtons.forEach(buttons => {
                buttons.setHidden(false);
            });
            
            const tempMenu = {
                items: [{ text: 'Item 1'}, { text: 'Item 2' }, { text: 'Item 3' }]
            };
            
            this.menuButtons.forEach(button => {
                button.setMenu(tempMenu);
            });
        }
        else {
            this.menuButtons.forEach(buttons => {
                buttons.setUi(this.style.toLowerCase());
                buttons.setMenu(null);
                buttons.setHidden(false);
            });
        }
    }

    onTypeChange = (sender, value) => {
        this.type = value._text;
        this.iconButtons.forEach(menuItem => {
            const menuItemText = menuItem._text;

            if (menuItemText === this.type) {
                menuItem.setIconCls('x-font-icon md-icon-check');
            } else {
                menuItem.setIconCls(null);
            }
        });

        this.iconCls = this.type.indexOf('Icon') !== -1 ? 'x-fa fa-heart' : null;

        if(this.type.indexOf('Icon') !== -1){
            this.menuButtons.forEach(button => {
                button.setIconCls(this.iconCls);
                button.setText(null);
            });
        }

        if(this.type.indexOf('Text Icon') !== -1){
            for (let index = 0; index < this.menuButtons.length; index++) {
                if (index % 3 === 0) {
                    this.menuButtons[index].setText('Normal');
                } else if (index % 3 === 1) {
                    this.menuButtons[index].setText('Badge');
                } else {
                    this.menuButtons[index].setText('Disabled');
                }
                this.menuButtons[index].setIconCls(this.iconCls);
            }
        }

        if(this.type === 'Text') {
            for (let index = 0; index < this.menuButtons.length; index++) {
                if (index % 3 === 0) {
                    this.menuButtons[index].setText('Normal');
                } else if (index % 3 === 1) {
                    this.menuButtons[index].setText('Badge');
                } else {
                    this.menuButtons[index].setText('Disabled');
                }
                this.menuButtons[index].setIconCls(null);
            }
        }
    }

    setDefaultsForStyle = (event) => {
        this.styleMenuCmp = event.detail.cmp;

        if (Ext.isEdge) {
            this.styleMenuCmp.on('activeItemchange', this.styleMenuItemChange.bind(this));
        } else {
            this.styleMenuCmp.on('click', this.styleMenuItemChange.bind(this));
        }
    }

    setTypeForStyle = (event) => {
        this.typeMenuCmp = event.detail.cmp;
        if (Ext.isEdge) {
            this.typeMenuCmp.on('activeItemchange', this.onTypeChange.bind(this));
        } else {
            this.typeMenuCmp.on('click', this.onTypeChange.bind(this));
        }
    }

    setIcon = (event) => {
        const menuItemCmp = event.detail.cmp;
        const menuItemText = menuItemCmp._text;

        if (menuItemText === this.type) {
            menuItemCmp.setIconCls('x-font-icon md-icon-check');
        } else {
            menuItemCmp.setIconCls(null);
        }

        this.iconButtons.push(menuItemCmp);
    }

    setStyle = (event) => {
        const menuItemCmp = event.detail.cmp;
        const menuItemText = event.detail.cmp._text;

        if (menuItemText === this.style) {
            menuItemCmp.setIconCls('x-font-icon md-icon-check');
        } else {
            menuItemCmp.setIconCls(null);
        }

        this.styleButtons.push(menuItemCmp);
    }
}
