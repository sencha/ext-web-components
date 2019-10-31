import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.html';
import { getCmp } from '../../util.js';
export default class MainComponent {

    constructor() {
        var navTreeRoot = {
            hash: 'all',
            iconCls: 'x-fa fa-home',
            leaf: false,
            text: 'All',
            children: window.menu
        };
        this.treeStore = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });
        this.wait = 3;
    }

    viewportReady = (event) => {
        console.log('readyViewport');
        this.navInProcess = false;
        this.navTreelistCmp = getCmp(event, 'navTreelist');
        this.navTreePanelCmp = getCmp(event, 'navTreePanel');
        this.componentsViewCmp = getCmp(event, 'componentsView');

        this.navTreelistCmp.setStore(this.treeStore);
        var bodyStyle = `
            backgroundSize: 20px 20px;
            borderWidth: 0px;
            backgroundColor: #e8e8e8;
            backgroundImage:
            linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
            linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)
        `;
        // this.dataviewNavCmp.setStyle({'background':'top', 'display':'block', 'text-align':'center'});
        // if(Ext.os.is.Phone) {this.dataviewNavCmp.setCentered(false);}
        // var tpl = `
        //     <div class="app-thumbnail">
        //       <div class="app-thumbnail-icon-wrap">
        //         <div class="app-thumbnail-icon {iconCls}"></div>
        //       </div>
        //       <div class="app-thumbnail-text">{text}</div>
        //       <div class="{premiumClass}"></div>
        //     </div>
        // `;
        // this.dataviewNavCmp.setItemTpl(tpl);
        // this.dataviewNavCmp.setStore(this.treeStore);

        var hash = window.location.hash.substr(1);
        if (hash == '') {hash = 'all';}
        var node = this.navTreelistCmp.getStore().findNode('hash', hash);
        this.navigate('load', node);
    }

    afterAllLoaded = () => {
        this.wait = this.wait - 1;
    }

    navTreelistSelectionChange = (event) => {
        var record = event.detail.record;
        this.navigate(record);
    }

    navigate = (node) => {
        // if (record == null) {
        //     console.log('it was null');
        //     return;
        // }
        // var hash = record.data.hash;
        // var childNum = record.childNodes.length;
        // if (childNum == 0 && hash != undefined) {
        //     window.location.hash = '#' + hash;
        //     this.componentsViewCmp.setHidden(false);
        // }
        //
        // if(Ext.os.is.Phone) {
        //     var collapsed = this.navTreePanelCmp.getCollapsed();
        //     if (collapsed == true){collapsed = false;} else{collapsed = true;}
        //     this.navTreePanelCmp.setCollapsed(collapsed);
        // }

        var hash = node.data.hash;
        var childNum = node.childNodes.length;

        // this.breadcrumbCmp.setSelection(node);
        this.navTreelistCmp.setSelection(node);

        if (childNum == 0 && hash != undefined) {
            window.location.hash = '#' + hash;
            this.showRouter();
        }
        else {
            // this.componentsViewCmp.setHidden(true);
            // this.dataviewNavCmp.setData(node.childNodes);
            window.router.hidden = true;
        }

        if(Ext.os.is.Phone) {this.navTreePanelCmp.setCollapsed(true);}

        this.navInProcess = false;
        console.log('nav ended');
    }

    showRouter = () => {
        window.router.hidden = false;
        this.componentsViewCmp.setHidden(false);
        console.log('routeme');
        window.router.routeMe();
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) node.expand();
        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    toggleTree = () => {
        var collapsed = this.navTreePanelCmp.getCollapsed();
        if (collapsed == true){collapsed = false;} else{collapsed = true;}
        this.navTreePanelCmp.setCollapsed(collapsed);
    }

    toggleButtonReady = (event) => {
        const navButton = event.detail.cmp;

        if (Ext.os.is.Phone) {
            navButton.setHidden(false);
        } else {
            navButton.setHidden(true);
        }
    }
}
