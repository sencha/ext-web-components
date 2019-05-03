import './ColorPickerComponent.html';

export default class ColorPickerComponent {
  constructor () {
    this.color = '#00ff00';
  }

  getcolorTitle() {
    return `<p style="color: #${this.color}">Selected Color: #${this.color}</p>`;
  }

  onChange(picker) {
    this.color = picker.getValue();

    if(this.titlePanel) {
      const colorTitle = this.getcolorTitle();
      this.titlePanel.setTitle(colorTitle);
      this.mainColorSelector.setColor(this.color);
    }
  }

  onTitleReady = (event) => {
    this.titlePanel = event.detail.cmp;
    const colorTitle = this.getcolorTitle();
    this.titlePanel.setTitle(colorTitle);
  }

  mainColorPickerReady = (event) => {
    this.mainColorSelector = event.detail.cmp;
  }

  OnSelChange = (event) => {
    this.color = event.detail.color;
    if(this.titlePanel) {
      let colorTitle = this.getcolorTitle();
      this.titlePanel.setTitle(colorTitle);
      this.selButton = Ext.getCmp("colorSelectorButton");
      this.selButton.setColor(this.color);
    }
  }

  onPanelReady = (event) => {
    this.panel = event.detail.cmp;
    const isPhone = Ext.os.is.Phone;

    const panelHeader =  {
      hidden: isPhone ? true : false,
      items: [
        {
          xtype: 'component',
          html: 'colorbutton &#8680;'
        },
        {
          xtype: 'colorbutton',
          id: 'colorSelectorButton',
          width: Ext.platformTags.phone ? 25 : 15,
          height: Ext.platformTags.phone ? 25 : 15,
          listeners: {
            change: this.onChange.bind(this),
          },
          value: this.color
        }
      ]
    }
    this.panel.setHeader(panelHeader);
    this.panel.setTitle('Color Picker Components');


    const top = !isPhone ? '10' : null
    const left = !isPhone ? '10' : null
    const width = !isPhone ? '600' : null
    const height = !isPhone ? '475' : null

    this.panel.setTop(top);
    this.panel.setLeft(left);
    this.panel.setWidth(width);
    this.panel.setHeight(height);
  }
}
