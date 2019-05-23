import './ColorPickerComponent.html';

export default class ColorPickerComponent {
    constructor() {
        this.color = '#00ff00';
    }

    getcolorTitle = () => {
        return `<p style="color: #${this.color}">Selected Color: #${this.color}</p>`;
    }

    onChange = (picker) => {
        this.color = picker.getValue();

        if(this.titlePanel) {
            const colorTitle = this.getcolorTitle();
            this.titlePanelCmp.setTitle(colorTitle);
            this.mainColorSelectorCmp.setColor(this.color);
        }
    }

    onTitleReady = (event) => {
        this.titlePanelCmp = event.detail.cmp;
        const colorTitle = this.getcolorTitle();
        this.titlePanelCmp.setTitle(colorTitle);
    }

    mainColorPickerReady = (event) => {
        this.mainColorSelectorCmp = event.detail.cmp;
    }

    OnSelChange = (event) => {
        this.color = event.detail.color;
        if(this.titlePanel) {
            let colorTitle = this.getcolorTitle();
            this.titlePanelCmp.setTitle(colorTitle);
            this.selButtonCmp = Ext.getCmp('colorSelectorButton');
            this.selButtonCmp.setColor(this.color);
        }
    }

    onPanelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        const isPhone = Ext.os.is.Phone;

        const panelHeader = {
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
        };
        this.panelCmp.setHeader(panelHeader);
        this.panelCmp.setTitle('Color Picker Components');


        const top = !isPhone ? '10' : null;
        const left = !isPhone ? '10' : null;
        const width = !isPhone ? '600' : null;
        const height = !isPhone ? '475' : null;

        this.panelCmp.setTop(top);
        this.panelCmp.setLeft(left);
        this.panelCmp.setWidth(width);
        this.panelCmp.setHeight(height);
    }
}
