import './IconTabComponent.html';

export default class IconTabComponent {
    tabpanelReady = (event) => {
        this.tabpanel = event.detail.cmp;
        this.tabpanel.setTabBar({docked:'bottom'});
    }
}
