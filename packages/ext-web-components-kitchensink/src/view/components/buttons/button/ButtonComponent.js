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

  toggleReady = (event) => {
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

  styleMenuItemChange(sender, value) {
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

      const tempMenu = Ext.create('Ext.menu.Menu');
      const item1 = {
        indented: false,
        text: "Item 1",
        xtype: 'menuitem'
      };

      const item2 = {
        indented: false,
        text: "Item 2",
        xtype: 'menuitem'
      };

      const item3 = {
        indented: false,
        text: "Item 3",
        xtype: 'menuitem'
      };

      tempMenu.add(item1);
      tempMenu.add(item2);
      tempMenu.add(item3);
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

  onTypeChange(sender, value) {
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

  setDefaultsForStyle = (event) => {
    this.styleMenu = event.detail.cmp;
    this.styleMenu.on('click', this.styleMenuItemChange.bind(this));
  }

  setTypeForStyle = (event) => {
    this.typeMenu = event.detail.cmp;
    this.typeMenu.on('click', this.onTypeChange.bind(this));
  }

  setIcon = (event) => {
    const menuItem = event.detail.cmp;
    const menuItemText = menuItem._text;

    if (menuItemText === this.type) {
      menuItem.setIconCls('x-font-icon md-icon-check');
    } else {
      menuItem.setIconCls(null);
    }

    this.iconButtons.push(menuItem);
  }

  setStyle = (event) => {
    const menuItem = event.detail.cmp;
    const menuItemText = menuItem._text;

    if (menuItemText === this.style) {
      menuItem.setIconCls('x-font-icon md-icon-check');
    } else {
      menuItem.setIconCls(null);
    }

    this.styleButtons.push(menuItem);
  }
}
