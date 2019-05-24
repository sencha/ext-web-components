import './TabBarComponent.html';

export default class TabBarComponent {
    constructor() {
        this.activeTab = 'info';
    }

    tabbarReady = (event) => {
        this.tabbarCmp = event.detail.cmp;
        this.tabbarCmp.setActiveTab('info');
        this.tabbarCmp.on('activeTabChange', this.onTabChange.bind(this));
    }

    onTabChange = (sender, value) => {
        this.activeTab = value._text;
        this.containerCmp.setHtml(`Active Tab: ${this.activeTab}`);
    }

    containerReady = (event) => {
        this.containerCmp = event.detail.cmp;
        this.containerCmp.setHtml(`Active Tab: ${this.activeTab}`);
    }
}
