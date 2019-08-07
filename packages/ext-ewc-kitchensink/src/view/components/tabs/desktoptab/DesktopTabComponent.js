import './DesktopTabComponent.html';

export default class DesktopTabComponent {
    constructor() {}

    tabpanelReady = (event) => {
        this.tabpanelCmp = event.detail.cmp;
        this.tabpanelCmp.setTabBar({ layout: { pack: 'left' } });
    }
}
