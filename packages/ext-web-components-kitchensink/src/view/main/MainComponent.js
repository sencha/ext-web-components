import { extnameToProperty } from '@sencha/ext-elements-all/src/util.js';
import hljs from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.css';
import './MainComponent.html';

Ext.require(['Ext.data.TreeStore']);

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
        if (Ext.os.is.Phone) {this.collapsed = true;}
    }

    // setupCmp(event) {
    //     for (var prop in event.detail.cmpObj) {
    //         this[prop+'Cmp'] = event.detail.cmpObj[prop];
    //     }
    // }

    viewportReady = (event) => {
        console.log('readyViewport');
        this.navInProcess = false;

        //find a way for this to be run automatically
        extnameToProperty(event, this);
        //extnameToProperty(['all'], event, this, 'Cmp');

        this.rightContainerCmp.updateHtml('Build: ' + BUILD_VERSION); // eslint-disable-line no-undef
        this.breadcrumbCmp.setStore(this.treeStore);
        this.navTreelistCmp.setStore(this.treeStore);
        var bodyStyle = `
            backgroundSize: 20px 20px;
            borderWidth: 0px;
            backgroundColor: #e8e8e8;
            backgroundImage:
            linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
            linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)
        `;
        this.selectionCmp.setBodyStyle(bodyStyle);
        this.dataviewNavCmp.setStyle({'background':'top', 'display':'block', 'text-align':'center'});
        if(Ext.os.is.Phone) {this.dataviewNavCmp.setCentered(false);}
        var tpl = `
            <div class="app-thumbnail">
              <div class="app-thumbnail-icon-wrap">
                <div class="app-thumbnail-icon {iconCls}"></div>
              </div>
              <div class="app-thumbnail-text">{text}</div>
              <div class="{premiumClass}"></div>
            </div>
        `;
        this.dataviewNavCmp.setItemTpl(tpl);
        this.dataviewNavCmp.setStore(this.treeStore);

        var hash = window.location.hash.substr(1);
        if (hash == '') {hash = 'all';}
        var node = this.navTreelistCmp.getStore().findNode('hash', hash);
        this.navigate('load', node);
    }

    breadcrumbClick = (event) => {
        console.log('clickBreadcrumb');
        var node = event.detail.node;
        this.navigate('breadcrumb', node);
    }

    dataviewNavClick = (event) => {
        console.log('dataviewNavClick');
        var node = event.detail.location.record;
        this.navigate('dataview', node);
    }

    navTreelistSelectionChange = (event) => {
        console.log('navTreelistSelectionChange');
        var node = event.detail.record;
        this.navigate('tree', node);
    }

    navigate = (who, node) => {
        if (this.navInProcess) {
            console.log('nav in process, request from ' + who);
            return;
        }
        if (node == null) {return;}

        this.navInProcess = true;

        var hash = node.data.hash;
        var childNum = node.childNodes.length;

        this.breadcrumbCmp.setSelection(node);
        this.navTreelistCmp.setSelection(node);

        if (childNum == 0 && hash != undefined) {
            window.location.hash = '#' + hash;
            this.showRouter();
        }
        else {
            this.componentsViewCmp.setHidden(true);
            this.dataviewNavCmp.setData(node.childNodes);
            this.showSelection();
        }

        if(Ext.os.is.Phone) {this.navTreePanelCmp.setCollapsed(true);}

        this.navInProcess = false;
        console.log('nav ended');
    }

    showRouter = () => {
        this.selectionCmp.setHidden(true);
        window.router.hidden = false;
        this.codeButtonCmp.setHidden(false);
        this.componentsViewCmp.setHidden(false);
        console.log('routeme');
        window.router.routeMe();

        this.setCodeTabs();
    }

    showSelection = () => {
        this.selectionCmp.setHidden(false);
        window.router.hidden = true;
        this.codeButtonCmp.setHidden(true);
    }

    doClickToolbar = () => {
        var collapsed = this.navTreePanelCmp.getCollapsed();
        if (collapsed == true){collapsed = false;} else {collapsed = true;}
        this.navTreePanelCmp.setCollapsed(collapsed);
    }

    containsMatches = (node) => {
        const found = node.data.text.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) node.expand();
        return found;
    }

    filterNav = (event) => {
        var value = event.detail.newValue;
        this.filterRegex = new RegExp(`(${Ext.String.escapeRegex(value)})`, 'i');
        this.navTreelistCmp.getStore().filterBy(record => this.containsMatches(record));
    }

    toggleCode = () => {
        var collapsed = this.codePanelCmp.getHidden();
        if(collapsed == true) {collapsed = false;}
        else {collapsed = true;}
        this.codePanelCmp.setHidden(collapsed);
    }

    toggleTree = () => {
        let collapsed = this.navTreePanelCmp.getCollapsed();

        if (collapsed == true) {
            collapsed = false;
        } else {
            collapsed = true;
        }
        this.navTreePanelCmp.setCollapsed(collapsed);
    }

    setCodeTabs = () => {
        var hash = window.location.hash.substr(1);
        var currentRoute = {};
        window.routes.forEach((route) => {
            if(hash == '') {
                if (route.default == true) {currentRoute = route;}
            }
            else {
                if (route.hash == hash) {currentRoute = route;}
            }
        });

        var codeMap = window._code[currentRoute.hashlower];
        this.tabPanelCmp.removeAll();
        var componentName = currentRoute.hash + 'Component';

        this.setTab(codeMap, componentName + '.html');
        this.setTab(codeMap, componentName + '.js',);
        this.setTab(codeMap, componentName + '.scss',);
        this.setTab(codeMap, componentName + '.css',);
        this.setTab(codeMap, componentName + 'Data.js');
        this.setTab(codeMap, componentName + 'Dummy.js');
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    setTab = (codeMap, file) => {
        var codeMapFile = codeMap[file];
        if (codeMapFile != undefined) {
            this.tabPanelCmp.add(
                {
                    xtype: 'panel', title: file, ui: 'code-panel', layout: 'fit', userSelectable: true, scrollable: true,
                    tab: {ui: 'app-code-tab', flex: 0, padding: '0 5 0 0', minWidth: 220, maxWidth: 250},
                    html: `<pre><code class='code'>${codeMapFile.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                }
            );
        }
    }
}
