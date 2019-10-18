import './MainComponent.html';
export default class MainComponent {
    constructor() {
        const navTreeRoot = {
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
        this.collapsed = false;
        this.isInitial = true;
        if (Ext.os.is.Phone) {
            this.collapsed = true;
        }
    }

    
    getCmp(event, value) {
        var array = event.detail.allCmp;
        for (var i = 0; i < array.length; i++) {
            if (array[i]['extname'] === value) {
                return array[i].ext;
            }
        }
        return null;
    }

    readyMainPanel = (event) => {
        console.log('readyMainPanel');
        //console.log(event);
        this.navTreelistCmp = this.getCmp(event, 'navTreelist');
        this.navButton = this.getCmp(event, 'navButton');

        //if (Ext.os.is.Phone) {
        //    console.log('h');
        this.navButton.setHidden(false);
        //} else {
        //    this.navButton.setHidden(true);
        //}
        //console.log(this.navTreelistCmp);
        this.navTreelistCmp.setStore(this.treeStore);
        let hash = window.location.hash.substr(1);
        if (hash == '') {
            hash = 'home';
        }
        const node = this.navTreelistCmp.getStore().findNode('hash', hash);
        this.navTreelistCmp.setSelection(node);
    }

    readyToggleButton = (event) => {
        const navButton = event.detail.cmp;
        if (Ext.os.is.Phone) {
            navButton.setHidden(false);
        } else {
            navButton.setHidden(true);
        }
    }

    navTreelistSelectionChange = (event) => {
        const record = event.detail.record;
        this.navigate(record);
    }

    navigate = (record) => {
        console.log('navigate');
        if (record == null) {
            console.log('it was null');
            return;
        }
        const hash = record.data.hash;
        const childNum = record.childNodes.length;

        if (childNum == 0 && hash != undefined) {
            window.location.hash = '#' + hash;
            if (window['router']) {window['router'].routeMe();}
        }

        if(Ext.os.is.Phone) {
            let collapsed = this.navTreePanelCmp.getCollapsed();

            if (collapsed === true) {
                collapsed = false;
            } else {
                collapsed = true;
            }
            this.navTreePanelCmp.setCollapsed(collapsed);
        }
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) {
            node.expand();
        }

        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
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


    // readyNavTreelist = (event) => {
    //     console.log(event);
    //     // console.log('readyNavTreelist');
    //     // this.navTreelistCmp = event.detail.cmp;
    //     // this.navTreelistCmp.setStore(this.treeStore);


    //     // let hash = window.location.hash.substr(1);

    //     // if (hash == '') {
    //     //     hash = 'home';
    //     // }

    //     // const node = this.navTreelistCmp.getStore().findNode('hash', hash);
    //     // this.navTreelistCmp.setSelection(node);
    //     //this.navigate(node);






    //     //this.afterAllLoaded('readyNavTreelist');
    // }


    // afterAllLoaded = () => {
    //     // this.wait = this.wait - 1;

    //     // if (this.wait == 0) {
    //     //     let hash = window.location.hash.substr(1);

    //     //     if (hash == '') {
    //     //         hash = 'home';
    //     //     }

    //     //     const node = this.navTreelistCmp.getStore().findNode('hash', hash);
    //     //     this.navTreelistCmp.setSelection(node);
    //     //     this.navigate(node);
    //     // }
    // }

    // readyNavTreePanel = (event) => {
    //     // this.navTreePanelCmp = event.detail.cmp;
    //     // this.afterAllLoaded('readyNavTreePanel');
    //     // if(Ext.os.is.Phone) {
    //     //     let collapsed = this.navTreePanelCmp.getCollapsed();

    //     //     if (collapsed === true) {
    //     //         collapsed = false;
    //     //     } else {
    //     //         collapsed = true;
    //     //     }
    //     //     this.navTreePanelCmp.setCollapsed(collapsed);
    //     // }
    // }



    // readyRouter = (event) => {
    //     this.router = event.target;
    //     this.afterAllLoaded('readyRouter');
    // }

}
