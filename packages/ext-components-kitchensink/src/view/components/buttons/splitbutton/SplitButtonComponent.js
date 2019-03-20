import './SplitButtonComponent.css';
import './SplitButtonComponent.html';

export default class SplitButtonComponent {

  constructor() {
    this.menuProp = {};
    this.style = 'None';
    this.type = 'Text';
    this.menuButtons = [];
    this.iconButtons = [];
    this.styleButtons = [];
    this.iconCls = '';
    this.menuItem = '';
  }

  menu(event) {
    this.splitButton = event.detail.cmp;
    const menuProp = [{
      text: 'Menu Item 1'
    }, {
      text: 'Menu Item 2'
    }, {
      text: 'Menu Item 3'
    }];
    this.splitButton.setMenu(menuProp);
    this.menuButtons.push(this.splitButton);
  }

  toggleReady(event){
    this.toggleButton = event.detail.cmp;
  }

  toggleRound() {
    this.round = !this.round;

    if (this.round) {
      this.toggleButton.setIconCls('x-font-icon md-icon-check');
      this.menuButtons.forEach(buttons => {
        buttons.setUi('round');
      });

    }
    else {
      this.toggleButton.setIconCls(null);
      this.menuButtons.forEach(buttons => {
        buttons.setUi('');
      });
    }
  };

  onTypeChange(event) {
    console.log(event.config.text,'event')
    this.type = event.config.text;
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
      })
    };

    if(this.type.indexOf('Text Icon') !== -1){
      for (let index = 0; index < this.menuButtons.length; index++) {
        if (index % 3 === 0) {
          this.menuButtons[index].setText("Normal");
        } else if (index % 3 === 1) {
          this.menuButtons[index].setText("Badge");
        } else {
          this.menuButtons[index].setText("Disabled");
        }
        this.menuButtons[index].setIconCls(this.iconCls);
      }
    };

    if(this.type === 'Text') {
      for (let index = 0; index < this.menuButtons.length; index++) {
        if (index % 3 === 0) {
          this.menuButtons[index].setText("Normal");
        } else if (index % 3 === 1) {
          this.menuButtons[index].setText("Badge");
        } else {
          this.menuButtons[index].setText("Disabled");
        }
        this.menuButtons[index].setIconCls(null);
      }
    };
  }

  styleMenuItemChange(event) {
     this.style = event.config.text;
    console.log(this.style,'style')
    this.styleButtons.forEach(menuItem => {
      const menuItemText = menuItem._text;
      
      if (menuItemText === this.style) {
        menuItem.setIconCls('x-font-icon md-icon-check');
      } else {
        menuItem.setIconCls(null);
      }
    });

      this.menuButtons.forEach(buttons => {
        buttons.setUi(this.style.toLowerCase());
      });
    
  }

  setDefaultsForStyle(event) {
    console.log(event.detail.cmp,'event');
    this.styleMenu = event.detail.cmp;
    this.styleMenu.setDefaults({
      handler: this.styleMenuItemChange.bind(this),
    });
  }

  setTypeForStyle(event) {
    this.typeMenu = event.detail.cmp;
    this.typeMenu.setDefaults({
      handler: this.onTypeChange.bind(this),
    });
  }
  
  setIcon(event) {
    const menuItem = event.detail.cmp;
    const menuItemText = menuItem._text;

    if (menuItemText === this.type) {
      menuItem.setIconCls('x-font-icon md-icon-check');
    } else {
      menuItem.setIconCls(null);
    }

    this.iconButtons.push(menuItem);
  }

  setStyle(event) {
    const menuItem = event.detail.cmp;
    const menuItemText = menuItem._text;
    console.log(this.style,'style')
    if (menuItemText === this.style) {
      menuItem.setIconCls('x-font-icon md-icon-check');
    } else {
      menuItem.setIconCls(null);
    }

    this.styleButtons.push(menuItem);
  }

}
