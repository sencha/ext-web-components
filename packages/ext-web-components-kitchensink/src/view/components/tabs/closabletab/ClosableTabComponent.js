import './ClosableTabComponent.html';

export default class ClosableTabComponent {

    constructor() {
        this.nextKey = 0;
        this.tabs = [
            this.nextKey++,
            this.nextKey++,
            this.nextKey++
        ];
    }

    tabPanelReady = (event) => {
        this.tabPanel = event.detail.cmp;
        this.tabPanel.setTabBar({
            height: 48,
            layout: { pack: 'left' },
            style: { paddingRight: '52px' }
        });

        for (let i=0; i<this.tabs.length; i++) {
            this.tabPanel.add(this.addNewTab(i));
        }
    }

    addNewTab = (index) => {
        return Ext.create({
            xtype: 'panel',
            title: `Tab ${index}`,
            tab: { flex: 1, maxWidth: 150 },
            layout: 'center',
            closable: 'true',
            html: `<H1>Tab ${index} Content</H1>`,
        });
    }

    addTab = () => {
        const key = this.nextKey++;
        this.tabs = [...this.tabs, key];
        this.tabPanel.add(this.addNewTab(key));
        this.tabPanelAdded();
        return false;
    }

    tabPanelAdded = () => {
        if (this.tabPanel != undefined) {
            this.tabPanel.setActiveItem(this.tabs.indexOf(this.tabs.length-1));
        }
    }
}
